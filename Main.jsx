import Home from "./src/pages/Home";
import Favorites from "./src/pages/Favorites";
import { Route, Routes, Navigate } from "react-router-native";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Main;
