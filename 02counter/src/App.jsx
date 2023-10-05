import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const increaseValue = () => {
    if (counter < 20) setCounter(counter + 1);

  }
  const decreaseValue = () => {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseValue}>Increase Value {counter}</button>
      <br></br>
      <button onClick={decreaseValue}>Descrese Value {counter}</button>
    </>
  )
}

export default App
