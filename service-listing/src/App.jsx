import React from 'react'
import "./App.css"
import ServiceCard from './components/ServiceCard'


function App() {

  return (
    <div>
      
      <h1>Service Listing:</h1>

      <br />
      
      <ServiceCard name = "vet" desc = "vet doc" />
      <ServiceCard name = "Joker" desc = "joke man" />
    
    </div>
  )
}

export default App