import propTypes from 'prop-types';

function Button({ name, clickHandler }) {
  return (
    <button type="button" onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default Button;
