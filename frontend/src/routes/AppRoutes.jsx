// all routing parts are here

// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConstant } from "./AppRoutesConstants";
import EventTours from "../pages/EventTours";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Admission from "../pages/Admission";
import Contact from "../pages/Contact";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routesConstant.homepage.path} element={<Home />} />
          <Route path={routesConstant.eventsTours.path} element={<EventTours />} />
          <Route path={routesConstant.aboutus.path} element={<About />} />
          <Route path={routesConstant.gallery.path} element={<Gallery />} />
          <Route path={routesConstant.admission.path} element={<Admission />} />
          <Route path={routesConstant.contact.path} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
