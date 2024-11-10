import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './components/Random'
import Generate from './components/Generate'

function App() {
  
   return(
    
      <div>
        <h1 className='bg-pink-800 '>Random Gifs</h1>
        <div>
          <Random className="bg-red-500" />
          <br /><br />
          <br />
          <br />
          <br />
          <br />
          <Generate className="bg-pink-500" />
        </div>
      </div>
    
   )
}

export default App
