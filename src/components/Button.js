import propTypes from 'prop-types';

function Button({ name }) {
  return (
    <button type="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
