import React from "react";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import ServiceContent from "../components/Layout/ServiceContent";
import ServiceInfo from "../components/Layout/ServiceInfo";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <ServiceInfo />
      <ServiceContent />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
