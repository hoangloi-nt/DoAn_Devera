import { AuthProvider } from "components/contexts/auth-context";
import ProfilePage from "pages/ProfilePage";
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
      <AuthProvider>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/create" element={<CreatePage></CreatePage>}></Route>
            <Route path="/buy/:nftId" element={<BuyPage></BuyPage>}></Route>
            <Route path="/sell" element={<SellPage></SellPage>}></Route>
            <Route
              path="/profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
