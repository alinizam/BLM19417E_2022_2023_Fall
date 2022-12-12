import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    document.title = 'You clicked'+ count1 ;
  },[]);

  return (
    <div>
          
      <p>You clicked {count1} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me Only count
      </button>
      <button onClick={() => setCount1(count1 + 1)}>
        Click me count 1
      </button>
    </div>
  );
}
