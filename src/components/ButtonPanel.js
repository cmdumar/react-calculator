import propTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const keyValue = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <>
      <div className="group-1">
        {keyValue[0].map(i => (
          <Button key={i} name={i} clickHandler={handleClick(i)} />
        ))}
      </div>
      <div className="group-2">
        {keyValue[1].map(i => (
          <Button key={i} name={i} clickHandler={handleClick(i)} />
        ))}
      </div>
      <div className="group-3">
        {keyValue[2].map(i => (
          <Button key={i} name={i} clickHandler={handleClick(i)} />
        ))}
      </div>
      <div className="group-4">
        {keyValue[3].map(i => (
          <Button key={i} name={i} clickHandler={handleClick(i)} />
        ))}
      </div>
      <div className="group-5">
        {keyValue[4].map(i => (
          <Button key={i} name={i} clickHandler={handleClick(i)} />
        ))}
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

export default ButtonPanel;
