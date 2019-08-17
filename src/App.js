import React, { Component } from 'react'

class App extends Component {
  state = {
    marcado: `
      <h1>Inyectando HTML con React</h1>
      <br/>
      <hr/>
      <a href="#">Algun Link</a>
    `
  }

  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{
          __html: this.state.marcado
        }}>
        </div>
      </div>
    )
  }
}

export default App
