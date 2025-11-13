import React, { createContext, useState } from 'react';
import College from './College';

export const UserContext = createContext();

const Context = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <div style={{ backgroundColor: 'orange', padding: 10 }}>
        <h1>Context API Example</h1>
        <select
          style={{ padding: 8, fontSize: 16, marginTop: 10 }}
          value={user || ""}
          onChange={(e) => setUser(e.target.value)}
        >
          <option value="">-- Select User --</option>
          <option value="Raja Waqar Akram">Raja Waqar Akram</option>
          <option value="Ali Hassan">Ali Hassan</option>
          <option value="Hamza Khan">Hamza Khan</option>
        </select>

        <College />
      </div>
    </UserContext.Provider>
  );
};

export default Context;