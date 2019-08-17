import React, { Component } from 'react'

const Computacion = () => (
  <>
    <li>Monitor</li>
    <li>Mouse</li>
    <li>Teclado</li>
  </>
)

const Ropa = () => (
  <>
    <li>Playera</li>
    <li>Jeans</li>
    <li>Shorts</li>
  </>
)

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <Computacion />
          <Ropa />
        </ul>
      </div>
    )
  }
}

export default App