import React from "react";
import { Outlet } from "react-router-dom";
import {
  HomeScreen,
  AboutScreen,
  ComingSoonScreen,
  Error404Screen,
  CareerScreen,
} from "../screens";
import { Header, Footer } from "../modules/core";
import { UIContextProvider } from "../context/uiContext";
import PlaygroundScreen from "../screens/playground";

const ViewWithNavAndFooter = () => {
  return (
    <>
      <UIContextProvider>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </UIContextProvider>
    </>
  );
};

const routes = () => {
  return [
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [
        { path: "", element: <HomeScreen /> },
        { path: "about", element: <AboutScreen /> },
        { path: "coming-soon", element: <ComingSoonScreen /> },
        { path: "career", element: <CareerScreen /> },
        { path: "play", element: <PlaygroundScreen /> },
      ],
    },
    {
      path: "*",
      element: <Error404Screen />,
    },
  ];
};

export default routes;
