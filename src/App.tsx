import BaseLayout from "./Pages/Home/BaseLayout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Home from "./Pages/Home/switchable/Home";
import Movies from "./Pages/Home/switchable/Movies";
import Series from "./Pages/Home/switchable/Series";
import "./App.css"
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import MoviesLoadingPage from "./Pages/Loading/SingleLoadingPage";
import { Suspense, lazy } from "react";
import SingleLoadingPage from "./Pages/Loading/SingleLoadingPage";

type Props = Record<string, never>;

const App = (_props: Props) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<BaseLayout />}>
          <Route path="test" element={<MoviesLoadingPage />} />
          <Route index element={<Home />} />
          <Route path="movies">
            <Route index element={<Movies type="list" />} />
            <Route path=":id" element={<SinglePage />} />
          </Route>
          <Route path="series">
            <Route index element={<Series />} />
            <Route path=":id" element={<SinglePage />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to={"/home/"} />} />
        <Route path="/pageNotFound" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate to="/pageNotFound" />} />
      </Routes>
    </div>
  )
}

export default App

// #region : loading page prep

// #region : single movie page

const SinglePageLoadable = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={<SingleLoadingPage />}>
      <Component {...props} />
    </Suspense>
  )
}

const SinglePage = SinglePageLoadable(lazy(() => import("./Pages/Home/switchable/Single")))

// #endregion : single movie page

// #endregion : loading page prep