import axios from "axios";
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
  }, [address, price]);

  useEffect(() => {
    async function fetchCreatorData() {
      const response = await axios.get("http://localhost:1337/creators");
      const resProduct = await axios.get("http://localhost:1337/products");

      const productResults = [];
      resProduct.data.forEach((doc) => {
        if (doc.createby.address === address) {
          productResults.push({
            Category: doc.Category,
            Image: doc.image,
            Name: doc.Name,
            Price: doc.Price,
            id: doc.id,
          });
        }
      });

      response.data.forEach((doc) => {
        if (doc.address === address) {
          setUserInfo({
            address,
            price,
            name: doc.Name,
            avatar: doc.avatar,
            id: doc.id,
            create: productResults,
          });
        }
      });
    }
    fetchCreatorData();
  }, [address, price]);

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be use within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
