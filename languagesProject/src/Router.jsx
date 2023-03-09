import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { User } from "./components/User";



export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Home/" element={<Home />} />
      <Route path="/Courses/" element={<Courses />} />
      <Route path="/About/" element={<About />} />
      <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />
      <Route path="/User/" element={<User />} />
    </Routes>
  </BrowserRouter>
);