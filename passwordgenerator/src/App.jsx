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
 for(let i=0;i<=array.length;i++){
let char=math.floor(Math.random()*str.length+1)
pass=str.charAt(char)
 } setPassword(pass)
},[number,length,character,setPassword])

  return (
    <>
     <h1 className='text-6xl  text-center text-white'>Password generator</h1>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-900 bg-gray-800'>ytred</div>
    </>
  )
}

export default App
