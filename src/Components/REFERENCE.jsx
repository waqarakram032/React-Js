import React, { useState, useEffect, useContext, useRef, createContext } from "react";

// Context create
const UserContext = createContext();

const REFERENCE = () => {
  return (
    <UserContext.Provider value={"Raja Akram sahb"}>
      <Counter />
    </UserContext.Provider>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);
  const inputRef = useRef();

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Hello, {user} </h2>
      <input ref={inputRef} placeholder="Type something..." />
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default REFERENCE;
