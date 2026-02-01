import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Wips from "./pages/Wips";
import Detail from "./pages/Detail";

import { works } from "./data/works";
import { wips } from "./data/wips";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="Wips" element={<Wips />} />

        <Route path="works/:id" element={<Detail items={works} backTo="/works" />} />
        <Route path="wips/:id" element={<Detail items={wips} backTo="/wips" />} />
      </Route>
    </Routes>
  );
}
