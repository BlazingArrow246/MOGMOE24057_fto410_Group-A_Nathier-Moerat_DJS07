import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( //creates a React root for your app to render into, then selects the div with the id="root" in your index.html file, where React app will be mounted.

  //A development-only tool that helps you identify potential problems in your app.
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
