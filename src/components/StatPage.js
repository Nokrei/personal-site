import React, { useState, useEffect } from 'react';
import useInterval from './useInterval';
import Counter from './Counter';
const StatPage = () => {
  return (
    <div className='statPage mainPage'>
      <Counter
        delay={1}
        max={4648118067}
        inc={19123456}
        text2= " People use the internet"
      />
       <Counter
      delay = {25}
      max = {90} 
      inc = {1}
      text = '%'
      text2 = 'Use it on mobile devices'
    
    />
    <p>They are your potential <br></br> Customers</p>
    </div>
  );
};

export default StatPage;
/*
function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
} 

const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 12);
    }, 100);
    if(counter > 1000) {
        clearInterval(interval)
    }
    return () => {
      interval
    };
   
  }, []);

*/
