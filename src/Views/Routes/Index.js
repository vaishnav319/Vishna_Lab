import React from "react";
import Home from "../UI/Pages/Home/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useLayoutEffect } from "react";
import PageNotFound from "./PageNotFound";
import People from "../UI/Pages/People/People";
import Research from "../UI/Pages/Research/Research";
import PublicationDesc from "../UI/Commons/PublicationDesc";
import FacultyDesc from "../UI/Pages/People/FacultyDesc";
import PhdDesc from "../UI/Pages/People/PhdDesc";

import Projects from "../UI/Pages/Projects/Projects";
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/publication/:id" element={<PublicationDesc />} />
            <Route path="/faculty/:id" element={<FacultyDesc />} />
            <Route path="/phdscholar/:id" element={<PhdDesc />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </div>
  );
};
export default Index;
