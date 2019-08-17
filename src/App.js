import React, { Component } from 'react'

const Title = ({ uiColor, children }) => {
  const styles = {
    background: uiColor,
    padding: '0.3em',
    color: '#FFF',
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  return (
    <h1 style={styles}>
      { children }
    </h1>
  )
}


class App extends Component {
  state = {
    uiColor: 'tomato'
  }

  render () {
    const { uiColor } = this.state
    return (
      <div>
        <Title
          uiColor={uiColor}
        >
          Super <em>Ninja</em>
        </Title>
      </div>
    )
  }
}

export default App