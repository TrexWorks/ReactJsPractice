import { useState, useCallback, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password,setPassword] = useState('')

  // ref hook 

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(isNumAllowed) str += '0123456789'
    if(isCharAllowed) str += '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
    console.log("str",str)

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      
      password += str.charAt(char);
    }
    setPassword(password);
  },[length,isNumAllowed,isCharAllowed,setPassword])


  useEffect(() => {
    passwordGenerator();
  },[length,isNumAllowed,isCharAllowed,passwordGenerator])

  function setPasswordLength(event){
    setLength(event.target.value);
  }

  const setNumberAllowed = (e) => {
    setIsNumAllowed((prev) => !prev);
  }

  const setCharcterAllowed = (e) => {
    setIsCharAllowed((prev) => !prev);
  }

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg- border-1 border-black p-4'>
      <h1 className="text-4xl text-center mb-4">Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type = 'text' 
            value={password}
            className='outline-none w-full py-1 px-3' 
            placeholder='Password'
            readOnly
            ref={passwordRef} />
            <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 btn' onClick={copyPassword}>Copy</button>

        </div>

        <div className="flex  text-sm gap-x-2">
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6} 
                max={50}
                value = {length}
                className='cursor-pointer'
                onChange = {setPasswordLength}
              />
              <label>
                Length : {length}
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
               id="numberInput" 
               defaultChecked={isNumAllowed}
               onChange={setNumberAllowed} />
                <label>
                Numbers
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
               id="charInput" 
               defaultChecked={isCharAllowed}
               onChange={setCharcterAllowed} />
                <label>
                Character
              </label>
            </div>
        </div>


      </div>
    </>
  )
}

export default App
