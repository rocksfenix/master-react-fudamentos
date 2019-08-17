import React, { Component } from 'react'

const Gato = (props) => (
  <div>
    <h1>Gato 🐈</h1>
    <pre>
      { JSON.stringify(props, null, 4 ) }
    </pre>
  </div>
)

class App extends Component {
  state = {
    fuerza: 100,
    vidasRestantes: 7,
    name: 'Chimicuil'
  }

  render () {
    const otrosDatos = {
      raza: 'tropical',
      peleasNocturnas: 300
    }
    return (
      <div>
        <Gato
          name='Garfield'
          age='2 años'
          { ...otrosDatos }
          { ...this.state }
        />
      </div>
    )
  }
}

export default App
