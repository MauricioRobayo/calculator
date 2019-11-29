import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ name, color, wide }) => (
  <button
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
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool,
}

Button.defaultProps = {
  wide: false,
}

export default Button
