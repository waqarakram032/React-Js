import React, { useContext } from 'react';
import { UserContext } from './Context';  

const Subject = () => {
  const user = useContext(UserContext);   

  return (
    <div style={{ backgroundColor: 'brown', padding: 10, color: 'white' }}>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
};

export default Subject;