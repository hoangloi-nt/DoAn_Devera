import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import BuyPage from "./pages/BuyPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/create" element={<CreatePage></CreatePage>}></Route>
          <Route path="/buy/:nftId" element={<BuyPage></BuyPage>}></Route>
          <Route path="/sell" element={<SellPage></SellPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
