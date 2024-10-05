import React, { useContext, useEffect, useState } from "react";
import IncreaseAge from "./IncreaseAge";


const Home = () => {
  const [state, setState] = useState(["Vanshika"]);

    const [name, setName] = useState();
    // const [] 
    const firstName = state?.[0];
  useEffect(() => {
    console.log("run useEffect");
  }, [firstName, name]);

  // !important note the new state must return prev state
  const click = () => {
    setState(["Vanshika"]);
    console.log("state1=>", state);
    // setState(prevState => [...prevState, "React"]); // state =["Vanshika"]
    // console.log("state2=>", state);
    // setState(prevState => [...prevState, "Next"]); // state =["Vanshika"]
    // console.log("state3=>", state);
  }
//   console.log(state);

//   console.log("user=>", user);
  return <div style={{ color: 'black'}}>
    <button onClick={click}>Add REact</button>
    <p>{JSON.stringify(state)}</p>
    <input type="text" onChange={(e) =>setName(e.target.value)} placeholder="name" />
    <IncreaseAge />
  </div>;
};

export default Home;











import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";

const IncreaseAge = () => {
    const { user, setUser } = useContext(UserContext);
  return (
    <div>
        <p>User: {user.name} {user.age}</p>
        <input type="number" value={user.age} onChange={(e) => setUser(prev => { return {...prev, age: e.target.value } })} />
    </div>
  )
}

export default IncreaseAge













import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <>
      <App />
    </>
  </UserProvider>
)
// <StrictMode>
// </StrictMode>,








import React, { createContext, useState } from 'react';

// Create a Context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Vanshika Tomar', age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
