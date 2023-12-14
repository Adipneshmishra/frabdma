import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const addValue=()=>{
    // just add a condition so that count doest not exceed 20
    if(count<20){
    setCount(count+1)}
  }
  const decreaseValue=()=>{
   // just add a condition so that count doest not fall behind 0
    if(count>0){
    setCount(count-1)}
  }
  //usin hooks 
  let [count, setCount] = useState(15)

  return (
    <>
  <h1>first react app</h1>
  <h2> counter value {count}</h2>
  <button onClick={addValue}>increase</button>
  <br></br>
  <button onClick={decreaseValue}>decrease</button>
    </>
  )
}

export default App
