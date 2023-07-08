import BaseLayout from "./Pages/Home/BaseLayout";
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home/switchable/Home";
import Movies from "./Pages/Home/switchable/Movies";
import Series from "./Pages/Home/switchable/Series";
import Single from "./Pages/Home/switchable/Single";

type Props = Record<string, never>;

const App = (props: Props) => {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<Single />} />
          </Route>
          <Route path="series">
            <Route index element={<Series />} />
            <Route path=":id" element={<Single />} />
          </Route>
        </Route>
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}

export default App