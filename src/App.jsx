import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to="/SignUp"> SignUp </Link>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
