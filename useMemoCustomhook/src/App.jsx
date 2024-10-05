import { useState,useMemo } from 'react'
import './App.css'
import useCustomeMemo from './useCustomeMemo';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2,setCounter2]=useState(100);
  const SquareCounter=()=>{
    console.log("Expnesive ")
    return counter*counter;
  }
  const  memoisedSqrvalue=useCustomeMemo(SquareCounter,[counter])
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <h1>Set Counter={memoisedSqrvalue}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <h1>Counter2:{counter2}</h1>
      <button onClick={()=>setCounter2(counter2-1)}>Decrement</button>
      </div>
  )
}

export default App
