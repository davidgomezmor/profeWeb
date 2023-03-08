import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { User } from "./components/User";



export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Home/" element={<Home />} />
      <Route path="/Courses/" element={<Courses />} />
      <Route path="/About/" element={<About />} />
      <Route path="/Login/" element={<Login />} />
      <Route path="/SignUp/" element={<SignUp />} />
      <Route path="/User/" element={<User />} />
    </Routes>
  </BrowserRouter>
);