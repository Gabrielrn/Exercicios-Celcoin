import React from 'react'
import { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);

  function soma() {
    setCounter(counter + 1);
  }

  function subtracao() {
    setCounter(counter - 1);
  }

  return (
    <>
       <h1>{counter}</h1>
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <script src="script.js"></script>
    </>
  )
}

export default Counter