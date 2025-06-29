import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Task from "../Pages/Task/TaskList";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Task />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
