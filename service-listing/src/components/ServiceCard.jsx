import React from 'react'


function ServiceCard({name , desc}) {
  return (
    <div>
        <div>
            <p>Name: {name}</p>
            <p>Description: {desc}</p>

            <p>Name: apache</p>
            <p>Description: old tech</p>

            <p>Name: mySQL</p>
            <p>Description: new tech</p>
        </div>
        <br />
    </div>
  )
}

export default ServiceCard