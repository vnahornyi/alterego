import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

import * as routes from "./constants/routes";
import { useAppDispatch } from "./hooks";
import { prepareUser } from "./store/actions/auth";

import MainLayout from "./modules/MainLayout";
import AuthLayout from "./modules/AuthLayout";

const HomePage = loadable(() => import("./pages/HomePage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));
const ProfilePage = loadable(() => import("./pages/ProfilePage"));
const NewsPage = loadable(() => import("./pages/NewsPage"));
const NotFoundPage = loadable(() => import("./pages/NotFound"));

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(prepareUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.NEWS} element={<NewsPage />} />
          <Route path={routes.HOME} element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.PROFILE} element={<ProfilePage />} />
          <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
