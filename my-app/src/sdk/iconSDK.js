import IconService from "icon-sdk-js";
import { toast } from "react-toastify";
const { IconConverter, IconBuilder, IconAmount, IconUtil, HttpProvider } =
  IconService;
const { IcxTransactionBuilder } = IconBuilder;

export default class Request {
  constructor(id, method, params) {
    this.jsonrpc = "2.0";
    this.id = id;
    this.method = method;
    this.params = params;
  }
}

export const NETWORKS = {
  sejong: {
    name: "Sejong Testnet",
    endpoint: "https://sejong.net.solidwallet.io/api/v3",
    nid: "0x53",
  },
};
const ADDRESS = "address";
const rawTransaction = "rawTransaction";

export const httpProvider = new HttpProvider(NETWORKS.sejong.endpoint);

const iconService = new IconService(httpProvider);

export const hashShortener = (hashStr) => {
  if (!hashStr) return "";
  const len = hashStr.length;
  return `${hashStr.substring(0, 6)}...${hashStr.substring(len - 4)}`;
};

export const convertToICX = (balance) => {
  return IconService.IconAmount.of(balance, IconService.IconAmount.Unit.LOOP)
    .convertUnit(IconService.IconAmount.Unit.ICX)
    .toString();
};

export const getBalance = async (address) => {
  const balance = await iconService
    .getBalance(address || localStorage.getItem("ADDRESS"))
    .execute();
  return convertToICX(balance);
};

export const disConnect = (setAddress) => {
  sessionStorage.setItem("isConnected", "");
  localStorage.setItem("address", "");
  setAddress(null);
};
export const connectWallet = (setAddress) => {
  if (window) {
    const customEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
      detail: {
        type: "REQUEST_ADDRESS",
      },
    });
    window.dispatchEvent(customEvent);
    const eventHandler = (event) => {
      const { type, payload } = event?.detail;
      if (type === "RESPONSE_ADDRESS") {
        localStorage.setItem(ADDRESS, payload);
        sessionStorage.setItem("isConnected", "connected");
        setAddress(payload);
      }
    };
    window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
    toast.success("Connect successfully!");
  }
};

export const transfer = async (transaction) => {
  const { from = localStorage.getItem("address"), to, value } = transaction;
  if (!from) {
    console.log("Connect wallet first!");
    return;
  }

  const txObj = new IcxTransactionBuilder()
    .from(from)
    .to(to)
    .value(IconAmount.of(value, IconAmount.Unit.ICX).toLoop())
    .stepLimit(IconConverter.toBigNumber(1000000000))
    .nid(IconConverter.toBigNumber(NETWORKS.sejong.nid))
    .nonce(IconConverter.toBigNumber(1))
    .version(IconConverter.toBigNumber(3))
    .timestamp(new Date().getTime() * 1000)
    .build();
  const rawTxObj = IconConverter.toRawTransaction(txObj);
  const tx = {
    jsonrpc: "2.0",
    method: "icx_sendTransaction",
    params: rawTxObj,
    id: 50889,
  };
  const test = await signTx(tx);
  if (test) return test.result;
  return false;
};

export const checkRs = async (txHash) => {
  try {
    const transactionResult = await iconService
      .getTransactionResult(txHash)
      .execute();
    if (transactionResult.status === 1) {
      console.log("Done");
    }
  } catch (error) {}
};

export const signTx = async (transaction) => {
  return new Promise((resolve, reject) => {
    window.dispatchEvent(
      new CustomEvent("ICONEX_RELAY_REQUEST", {
        detail: {
          type: "REQUEST_JSON-RPC",
          payload: transaction,
        },
      })
    );


		window.addEventListener(
			"ICONEX_RELAY_RESPONSE",
			function (event) {
				const type = event.detail.type;
				console.log(type);
				const payload = event.detail.payload;
				if (type === "RESPONSE_JSON-RPC") {
					resolve(payload);
				}
				if (type === "CANCEL_JSON-RPC") {
					console.log("Cancel");
					resolve(false);
				}
			},
			{ once: true },
		);
	});

};
