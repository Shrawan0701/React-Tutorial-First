import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './comp/Cards'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Shrawan",
    age: 19
  }
  let newArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl'>Tailwind test</h1>
     <Cards username="Shrawan Wandhekar" btnText="Click me"/>
     <Cards username="Shrawan" />
    </>
  )
}

export default App
