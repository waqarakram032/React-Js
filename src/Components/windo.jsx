import React, { useEffect, useState } from 'react'

const timer = () => {
    const [width, setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      const handleresize=()=>{
        setwidth(window.innerWidth);
      };
      window.addEventListener("resize",handleresize);

    
  
    return ()=>{
      window.removeEventListener("resize",handleresize);
    };
    },[]);
  return (
    <div> window resize is:{width}</div>
  )
}

export default timer