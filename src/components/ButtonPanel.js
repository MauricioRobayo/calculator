import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const ButtonPanel = ({ onClick }) => (
  <div>
    <div className="button-panel">
      <Button name="AC" color="lightgray" onClick={onClick} />
      <Button name="+/-" color="lightgray" onClick={onClick} />
      <Button name="%" color="lightgray" onClick={onClick} />
      <Button name="/" onClick={onClick} />
    </div>
    <div className="button-panel">
      <Button name="7" color="lightgray" onClick={onClick} />
      <Button name="8" color="lightgray" onClick={onClick} />
      <Button name="9" color="lightgray" onClick={onClick} />
      <Button name="*" onClick={onClick} />
    </div>
    <div className="button-panel">
      <Button name="4" color="lightgray" onClick={onClick} />
      <Button name="5" color="lightgray" onClick={onClick} />
      <Button name="6" color="lightgray" onClick={onClick} />
      <Button name="-" onClick={onClick} />
    </div>
    <div className="button-panel">
      <Button name="1" color="lightgray" onClick={onClick} />
      <Button name="2" color="lightgray" onClick={onClick} />
      <Button name="3" color="lightgray" onClick={onClick} />
      <Button name="+" onClick={onClick} />
    </div>
    <div className="button-panel">
      <Button name="0" wide color="lightgray" onClick={onClick} />
      <Button name="." color="lightgray" onClick={onClick} />
      <Button name="=" onClick={onClick} />
    </div>
  </div>
)

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonPanel
