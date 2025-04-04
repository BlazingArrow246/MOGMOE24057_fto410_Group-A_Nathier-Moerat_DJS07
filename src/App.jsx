import React from 'react'
import Header from './components/header.js'
import Meme from './components/Meme.js'

export default function App() {
const [isImportant, setIsImportant] = React.useState('Yes')
 
function handleClick() {
  setIsImportant("No")
}
  return (

  <div classname="state">
      <h1 classname = "state--title">Is state important to know?</h1>
    <div classname="state--value" onClick={handleClick}>
      
      <h1>{isImportant}</h1>
    </div>
  </div>
  )
}


