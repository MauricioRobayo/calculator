import React from 'react'
import Button from './Button'

const ButtonPanel = () => (
  <div>
    <div className="button-panel">
      <Button name="AC" color="lightgray" />
      <Button name="+/-" color="lightgray" />
      <Button name="%" color="lightgray" />
      <Button name="/" />
    </div>
    <div className="button-panel">
      <Button name="7" color="lightgray" />
      <Button name="8" color="lightgray" />
      <Button name="9" color="lightgray" />
      <Button name="*" />
    </div>
    <div className="button-panel">
      <Button name="4" color="lightgray" />
      <Button name="5" color="lightgray" />
      <Button name="6" color="lightgray" />
      <Button name="-" />
    </div>
    <div className="button-panel">
      <Button name="1" color="lightgray" />
      <Button name="2" color="lightgray" />
      <Button name="3" color="lightgray" />
      <Button name="+" />
    </div>
    <div className="button-panel">
      <Button name="0" wide color="lightgray" />
      <Button name="." color="lightgray" />
      <Button name="=" />
    </div>
  </div>
)

export default ButtonPanel
