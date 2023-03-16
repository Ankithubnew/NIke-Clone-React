import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
       </Routes>
      
    </>
  );
};
