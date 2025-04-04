import React from 'react'
import Header from './components/header.js'
import Meme from './components/Meme.js'

export default function App() {
const [isImportant, func] = React.useState('Yes')
console.log(isImportant)
  return (

  <div classname="state">
      <h1 classname = "state--title">Is state important to know?</h1>
    <div classname="state--value">
      <h1>{result[0]}</h1>
    </div>
  </div>
  )
}


