import { Routes, Route } from "react-router-dom";
import "./Body.css";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";

const Body = () => {
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default Body;
