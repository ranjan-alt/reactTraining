import "./App.css";
import Layout from "../Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Generator from "../Pages/Generator";
import PracticeHooks from "../components/practice/PracticeHooks";
import LearnRef from "../components/practice/LearnRefs";
import ReducerHook from "../components/practice/HookReducer";
import HookUseState from "../components/practice/HookUseState";
import HookRef from "../components/practice/HookRef";

function App() {
  return (
    <>
      {/* <Router>
        <Layout />
      </Router>
       */}
      {/* <PracticeHooks /> */}
      {/* <HookUseState /> */}
      <HookRef />
      {/* <ReducerHook /> */}
      {/* <LearnRef /> */}
      {/* <Generator /> */}
    </>
  );
}

export default App;
