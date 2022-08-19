import React, { lazy, Suspense, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "components/contexts/auth-context";

const SellPage = lazy(() => import("pages/SellPage"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const CreatePage = lazy(() => import("pages/CreatePage"));
const BuyPage = lazy(() => import("pages/BuyPage"));
const Marketplace = lazy(() => import("pages/Marketplace/Marketplace"));

const Main = lazy(() => import("components/layout/Main"));

const App = () => {
  return (
    <Fragment>

      <AuthProvider>
        <Suspense>
          <Routes>
            <Route element={<Main></Main>}>
              <Route path="/" element={<HomePage></HomePage>}></Route>
     <Route path="/marketplace" element={<Marketplace></Marketplace>}></Route>
              <Route path="/create" element={<CreatePage></CreatePage>}></Route>
              <Route path="/buy/:nftId" element={<BuyPage></BuyPage>}></Route>
              <Route path="/sell" element={<SellPage></SellPage>}></Route>
              <Route
                path="/profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </Suspense>
      </AuthProvider>

    </Fragment>
  );
};

export default App;
