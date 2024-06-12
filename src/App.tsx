

import { useState } from 'react'
import './App.css'

function App() {

    const [lookOrder, setLookOrder] = useState(0)

    const handleLook = async(e) => {
      e.preventDefault()
      setLookOrder(e.currentTarget.value)
    }

  return (
    <>
      <input type="text" onChange={(e)=> handleLook(e)}/>
    </>
  )
}

export default App
