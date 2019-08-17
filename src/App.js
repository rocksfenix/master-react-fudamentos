import React, { Component } from 'react'

class App extends Component {
  state = {
    text: '',
    evento: ''
  }

  manejador = (event) => {
    console.log(event.target.value)

    this.setState({
      text: event.target.value,
      evento: event.type
    })
  }
  
  render () {
    return (
      <div>
        <input
          type="text"
          onChange={this.manejador}
          onCopy={this.manejador}
          onPaste={this.manejador}
        />
        <h1>
          { this.state.text }
        </h1>
        <h2>
          { this.state.evento }
        </h2>
      </div>
    )
  }
}

export default App
