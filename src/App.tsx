import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

import { HOME, LOGIN, NEWS, PROFILE } from "./constants/routes";
import { useAppDispatch } from "./hooks";
import { prepareUser } from "./store/actions/auth";

const HomePage = loadable(() => import("./pages/HomePage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));
const ProfilePage = loadable(() => import("./pages/ProfilePage"));
const NewsPage = loadable(() => import("./pages/NewsPage"));

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(prepareUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={PROFILE} element={<ProfilePage />} />
        <Route path={NEWS} element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
