import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import NavBar from "./components/NavBar";

import AddPost from "./pages/AddPost";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Link to="/addPost"> AddPost </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<div>SignUp</div>} />
      </Routes>
    </>
  );
};

export default App;
