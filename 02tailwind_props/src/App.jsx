import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-100 text-blue p-4 rounded-xl mb-10'>Tailwind CSS</h1>
      <Card cardName="Mandy" btnName="Hello"/>
      
      <Card cardName="Pallu" btnName="Hanji"/>
    </>
  )
}

export default App
