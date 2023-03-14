import { Route, Routes } from "react-router-dom";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";


export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
      <Footer />
    </>
  );
};
