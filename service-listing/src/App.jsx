import React from 'react'
import "./App.css"
import ServiceCard from './components/ServiceCard'
import dataArray from "./data.json"

function App() {

  return (
    <div>
      
      <h1>Service Listing:</h1>

      <br />
      
      <ServiceCard></ServiceCard>
    </div>
  )
}

export default App