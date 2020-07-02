import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
  const coloredBtns = ['/', '*', '-', '+', '='];

  const panels = {
    first: ['AC', '+/-', '%', '/'],
    secont: ['7', '8', '9', '*'],
    third: ['4', '5', '6', '-'],
    fourth: ['1', '2', '3', '+'],
    fifth: ['0', '.', '='],
  };

  return (
    <>
      {Object.entries(panels).map(([key, panel]) => (
        <div key={key} className="button-panel">
          {panel.map((btnName) => (
            <Button
              key={btnName}
              name={btnName}
              color={coloredBtns.includes(btnName)}
              handleClick={handleClick}
              wide={btnName === '0'}
            />
          ))}
        </div>
      ))}
    </>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
