import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import SignUp from "../pages/SignUp/signUp";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home nombre="Guillermo" />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
