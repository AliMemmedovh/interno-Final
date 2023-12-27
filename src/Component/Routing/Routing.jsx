import { Route, Routes } from "react-router";
import Pages from "../../Pages/Pages/Pages";
import Services from "../../Pages/Services/Services";
import Project from "../../Pages/Project/Project";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import HomePage from "../../Pages/HomePage/HomePage";
import Search from "../../Pages/Search/Search";

 export const routes = [
  { path: "/", name: "Home", element: <HomePage /> },
  { path: "/Pages", name: "Pages", element: <Pages /> },
  { path: "/Services", name: "Services", element: <Services /> },
  { path: "/Project", name: "Project", element: <Project /> },
  { path: "/Blog", name: "Blog", element: <Blog /> },
  { path: "/Contact", name: "Contact", element: <Contact /> },
  { path: "/Search", name: "Search", element: <Search /> },
];


const Routing = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default Routing;
