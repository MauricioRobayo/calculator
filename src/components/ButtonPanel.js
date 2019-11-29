import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const ButtonPanel = ({ handleClick }) => {
  const coloredBtns = ['/', 'X', '-', '+', '=']

  const panels = {
    first: ['AC', '+/-', '%', '/'],
    secont: ['7', '8', '9', 'X'],
    third: ['4', '5', '6', '-'],
    fourth: ['1', '2', '3', '+'],
    fifth: ['0', '.', '='],
  }

  return (
    <div>
      {Object.entries(panels).map(([key, value]) => (
        <div key={key} className="button-panel">
          {value.map(btnName => (
            <Button
              key={btnName}
              name={btnName}
              color={coloredBtns.includes(btnName)}
              onClick={handleClick}
              wide={btnName === '0'}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default ButtonPanel
