import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/publicPages/Home";
import { Courses } from "../pages/publicPages/Courses";
import { About } from "../pages/publicPages/About";
import { Login } from "../pages/publicPages/Login";
import { Register } from "../pages/publicPages/Register";
import { Contact } from "../pages/publicPages/Contact";
import { ForgotPassword } from "../pages/publicPages/ForgotPassword";

import { HomeUser } from "../pages/protectedPages/HomeUser";

import { ProtectedRoute} from "./ProtectedRoute";


export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Home/" element={<Home />} />
      <Route path="/Courses/" element={<Courses />} />
      <Route path="/About/" element={<About />} />
      <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />
      <Route path="/Contact/" element={<Contact />} />
      <Route path="/ForgotPassword/" element={<ForgotPassword />} />
      <Route
          path="/HomeUser/"
          element={
            <ProtectedRoute>
              <HomeUser />
            </ProtectedRoute>
          }
        />

    </Routes>
  </BrowserRouter>
);