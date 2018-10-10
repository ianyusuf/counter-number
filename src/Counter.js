import React from 'react'
import Button from './Button'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counterNum: 0,
    }
  }

  addValue = (num) => {
    console.log('halo', this.props.step)
    this.setState((state) => ({
      counterNum: state.counterNum + num
    }))
  }

  render() {
    const { step, label, buttonColor } = this.props

    const inputProps = {
      type: 'number',
      placeholder: 'angka',
      value: this.state.counterNum,
    }

    return (
      <div>
        <p>{label}</p>
        <Button 
          color={buttonColor}
          onClick={() => this.addValue(-step)}
        >
          Kurangin
        </Button>

        <input {...inputProps} />

        <Button
          color={buttonColor}
          onClick={() => this.addValue(step)}
        >
          Tambahin
        </Button>
      </div>
    )
  }
}

export default Counter