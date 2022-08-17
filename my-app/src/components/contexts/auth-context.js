import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getBalance } from "../../sdk/iconSDK.js";

const AuthContext = createContext();
function AuthProvider(props) {
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [userInfo, setUserInfo] = useState("");
  const [price, setPrice] = useState("");
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    async function getPrice() {
      const price = await getBalance(address);
      setPrice(price);
    }
    getPrice();
    setUserInfo({
      address,
      price,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be use within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
