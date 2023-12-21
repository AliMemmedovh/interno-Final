import { Route, Routes } from "react-router";
import Pages from "../../Pages/Pages/Pages";
import Services from "../../Pages/Services/Services";
import Project from "../../Pages/Project/Project";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import HomePage from "../../Pages/HomePage/HomePage";
import Search from "../../Pages/Search/Search";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Pages" element={<Pages />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
};

export default Routing;
