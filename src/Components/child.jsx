import React from 'react';


const Child = (props) => {
    // const currentTime = new Date().toLocaleTimeString();
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Fruit List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {props.fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              background: '#f2f2f2',
              margin: '5px auto',
              padding: '8px',
              width: '150px',
              borderRadius: '8px',
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Child;
