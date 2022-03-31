import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import UploadField from "../components/Layout/UploadField";
const ImageUpload = () => {
  return (
    <React.Fragment>
      <Header />
      <UploadField />
      <Footer />
    </React.Fragment>
  );
};

export default ImageUpload;
