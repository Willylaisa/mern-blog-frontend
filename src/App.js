import Navbar from "./Navbar";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Blog from "./pages/Blog.js";
import Signup from "./pages/signup.js";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <section>
      <Navbar className="navbar" />
      <div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </section>
  );
}
