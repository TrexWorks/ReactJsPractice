import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function incrementCount(){
    if(count < 20){
      setCount(count+1)
    }
    
  }

  const decreaseCount = () => {
    if(count > 0){
      setCount(count-1)
    }
   
  }
  
  return (
    <>
     <h1>Hello, Counter Project</h1>
     <h2>Counter value : {count}</h2>

     <button onClick={incrementCount}  disabled = {count >= 20}>Increase Count</button>
     <button onClick={decreaseCount} disabled = {count <= 0}>Decrease Count</button>
    </>
  )
}

export default App
