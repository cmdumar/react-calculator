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

  const orangeBtn = ['÷', 'x', '-', '+', '='];

  let color = false;

  return (
    <>
      <div className="group">
        {keyValue[0].map(i => {
          if (orangeBtn.includes(i)) {
            color = true;
          } else {
            color = false;
          }
          return <Button key={i} name={i} color={color} clickHandler={() => clickHandler(i)} />;
        })}
      </div>
      <div className="group">
        {keyValue[1].map(i => {
          if (orangeBtn.includes(i)) {
            color = true;
          } else {
            color = false;
          }
          return <Button key={i} name={i} color={color} clickHandler={() => clickHandler(i)} />;
        })}
      </div>
      <div className="group">
        {keyValue[2].map(i => {
          if (orangeBtn.includes(i)) {
            color = true;
          } else {
            color = false;
          }
          return <Button key={i} name={i} color={color} clickHandler={() => clickHandler(i)} />;
        })}
      </div>
      <div className="group">
        {keyValue[3].map(i => {
          if (orangeBtn.includes(i)) {
            color = true;
          } else {
            color = false;
          }
          return <Button key={i} name={i} color={color} clickHandler={() => clickHandler(i)} />;
        })}
      </div>
      <div className="group">
        {keyValue[4].map(i => {
          if (orangeBtn.includes(i)) {
            color = true;
          } else {
            color = false;
          }
          return <Button key={i} name={i} wide={i === '0'} color={color} clickHandler={() => clickHandler(i)} />;
        })}
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

export default ButtonPanel;
