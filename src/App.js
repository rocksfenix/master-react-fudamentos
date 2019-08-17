import React, { Component } from 'react'

class App extends Component {

  manejador = (e) => {
    e.preventDefault()

    console.log(e.nativeEvent)
  }

  render () {
    return (
      <div>
        <a
          href="https://google.com"
          onClick={this.manejador}
          // onclick="return false"
        >
          GOOGLE
        </a>
      </div>
    )
  }
}

export default App
