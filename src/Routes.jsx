import React from "react";
import { useRoutes } from "react-router-dom";
import MendlesonLandingpageDesign from "../src/pages/MendlesonLandingpageDesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <MendlesonLandingpageDesign />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
