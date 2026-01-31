import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Project from "./pages/Project";
import Detail from "./pages/Detail";

import { works } from "./data/works";
import { projects } from "./data/projects";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="project" element={<Project />} />

        <Route path="works/:id" element={<Detail items={works} backTo="/works" />} />
        <Route path="project/:id" element={<Detail items={projects} backTo="/project" />} />
      </Route>
    </Routes>
  );
}
