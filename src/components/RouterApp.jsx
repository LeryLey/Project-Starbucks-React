import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import Rewards from "../pages/Rewards";
import GiftCardPage from "../pages/GiftCardPage";
const RouterApp = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/rewards" element={<Rewards/>} />
        <Route path="/gift-cards" element={<GiftCardPage/>} />
      </Routes>
    </>
  );
};

export default RouterApp;
