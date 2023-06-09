import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      Serch and Offers are Coming Soon
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
