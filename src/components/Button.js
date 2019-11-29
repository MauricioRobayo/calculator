import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ name, color, wide }) => (
  <button
    type="button"
    style={{ backgroundColor: color, flexBasis: wide ? '50%' : '25%' }}
  >
    {name}
  </button>
)

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
}

Button.defaultProps = {
  wide: false,
  color: 'orange',
}

export default Button
