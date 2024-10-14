import "./App.css";
import Layout from "../Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Generator from "../Pages/Generator";

function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
      <Generator />
    </>
  );
}

export default App;
