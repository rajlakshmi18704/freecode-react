import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(false)
const[length,setLength]=useState(8)
const[character,setCharacter]=useState(false)
const [password,setPassword]=useState(" ")
const passwordGenerator=useCallback(()=>{
 
 let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(number) str+="0123456789"
if(character)
str+="!@#$%^&*[]{}~`'"
 for(let i=1;i<=length;i++){
let char=Math.floor(Math.random()*str.length+1)
pass
+=str.charAt(char)
 } setPassword(pass)
},[number,length,character,setPassword])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-900 bg-gray-800 h-24'> 
   <h1 className=' text-center text-white'>Password generator</h1>
   <div className="flex shadow
   rounded-lg overflow-hidden mb-4">
    <input
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
 placeholder="Password"
    readOnly
    />
    <button>copy</button>
   </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
     <input type="range"
     min={6}
     max={113}
     value={length}
     className='cursor-pointer'
   onChange={(e)=>{
    {setLength(e.target.value)}
   }}  />
     <label>length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={number}
      id="numberInput"
      onChange={()=>{
        setNumber(prev=>
          !prev);
      }}
      />
      <label>
        Numbers
      </label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={number}
      id="numberInput"
      onChange={()=>{
        setNumber(prev=>
          !prev);
      }}
      />
      <label>
     Characters
      </label>
      </div>  
  </div>
 </div>

  )
}

export default App
