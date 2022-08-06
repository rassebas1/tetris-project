import { useState } from 'react'
import Game from './Components/Game/Game'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <div className="tetris-container">


        <Game></Game>

      </div>
    </div>
  )
}

export default App
