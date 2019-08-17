import React, { Component } from 'react'

const Title = (props) => {
  const styles = {
    background: props.uiColor,
    padding: '0.3em',
    color: '#FFF',
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  return (
    <h1 style={styles}>
      { props.children }
    </h1>
  )
}


class App extends Component {
  state = {
    uiColor: 'purple'
  }

  render () {
    return (
      <div>
        <Title
          uiColor={this.state.uiColor}
        >
          Super <em>Ninja</em>
        </Title>
      </div>
    )
  }
}

export default App