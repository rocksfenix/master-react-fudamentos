import React, { Component } from 'react'

const Saludo = (props) => {
  return (
    <div>
      <div>
        { props.name && <strong>{ props.name }</strong>}
      </div>

      { props.saluda
        ? (
          <h1>Hola, tu eres genial 🔮!</h1>
        )
        : (
          <p>
            Woops, no hay saludo para ti!
          </p>
        )
      }
    </div>
  )

  if (props.saluda) {
    return (
      <h1>Hola, tu eres genial 🔮!</h1>
    )
  }

  return (
    <p>
      Woops, no hay saludo para ti!
    </p>
  )
}

const App = () => (
  <div>
    <Saludo
      saluda
      name='Ninja PRO'
    />
  </div>
)

export default App
