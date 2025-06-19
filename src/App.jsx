import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar />
      <div className="container mx-auto my-5 rounded-xl bg-slate-400 p-5">

        <div className=" ">
          <h1 className="text-xl">Your Todos</h1>

        </div>
      </div>
    </>
  )
}

export default App
