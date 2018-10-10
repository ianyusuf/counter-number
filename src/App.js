import React from 'react'
import Counter from './Counter'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stepA: 30
    }
  }

  render() {
    const { stepA } = this.state
    return (
      <div>
        <h1>Halo</h1>
        <Counter 
          step={stepA}
          label="sepuluh"
          buttonColor="black"
        />
        <Counter
          step={5}
          label="lima"
          buttonColor="blue"
        />
        <Counter
          step={99}
          label="sembilansembilan"
          buttonColor="magenta"
        />
      </div>
    )
  }
}

export default App