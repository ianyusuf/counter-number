import React from 'react'

class Button extends React.Component {
  render() {
    const { color } = this.props

    const buttonStyle = {
      backgroundColor: color,
      color: 'white',
    }

    return (
      <button
        {...this.props}
        style={buttonStyle}
      />
    )
  }
}

export default Button