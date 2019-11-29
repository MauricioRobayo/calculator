import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ name, color, wide, handleClick }) => (
  <button
    onClick={() => handleClick(name)}
    type="button"
    style={{
      backgroundColor: color ? 'orange' : 'lightgray',
      flexBasis: wide ? '50%' : '25%',
    }}
  >
    {name}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  wide: PropTypes.bool,
}

Button.defaultProps = {
  wide: false,
}

export default Button
