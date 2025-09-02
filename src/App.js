import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import Blogs from "./pages/Blogs";
import SignIn from "./pages/SignIn";
import CreatePost from "./components/CreatePost/CreatePost";
// import Events from "./pages/Events";

export default function App({ toggleTheme, isDark }) {
  return (
    <>
     <Header toggleTheme={toggleTheme} isDark={isDark} />
       {/* <div style={{ paddingTop: "70px" }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <Blogs />
            </PrivateRoute>
          }
        />
        <Route path="/createpost" element={<CreatePost />} /> 
      </Routes>
{/* </div> */}
    </>
  );
}
