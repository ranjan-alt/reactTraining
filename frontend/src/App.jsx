import "./App.css";
import Layout from "../Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Generator from "../Pages/Generator";
import PracticeHooks from "../components/practice/PracticeHooks";
import LearnRef from "../components/practice/LearnRefs";

function App() {
  return (
    <>
      {/* <Router>
        <Layout />
      </Router>
       */}
      {/* <PracticeHooks /> */}
      <LearnRef />
      {/* <Generator /> */}
    </>
  );
}

export default App;
