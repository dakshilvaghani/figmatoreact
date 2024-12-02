import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import MendlesonLandingpageDesign from "../src/pages/MendlesonLandingpageDesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "mendlesonlandingpagedesign",
      element: <MendlesonLandingpageDesign />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
