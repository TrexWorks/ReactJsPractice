import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState(null);
 
  return (
    <div className="w-screen h-screen flex justify-center" style={{backgroundColor : color}}>
     {color && (
        <p className="p-2 px-4 text-center bg-white fixed top-8">
          Selected Color: {color}
        </p>
      )}

      <div className='footer bg-white p-4 fixed bottom-20 w-full-80 flex justify-center gap-5'>
        <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' style={{backgroundColor : 'red'}} onClick={()=>setColor('red')}>Red</button>
        <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' style={{backgroundColor : 'blue'}} onClick={()=>setColor('blue')}>Blue</button>
        <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' style={{backgroundColor : 'green'}} onClick={()=>setColor('green')}>Green</button>
        <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' style={{backgroundColor : 'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
        <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' style={{backgroundColor : 'purple'}} onClick={()=>setColor('purple')}>Purple</button>  
        <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' style={{backgroundColor : 'olive'}} onClick={()=>setColor('olive')}>Olive</button>
      </div>
      <button className='btn p-2 pl-4 pr-4 text-white cursor-pointer' onClick={()=>setColor(null)}>Remove</button>
      
    </div>
  )
}

export default App
