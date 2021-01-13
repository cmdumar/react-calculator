import propTypes from 'prop-types';

function Button({
  name, clickHandler, color, wide,
}) {
  return (
    <button className={`${color ? 'orange' : null} ${wide ? 'wide' : null}`} type="button" onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
  color: propTypes.bool,
  wide: propTypes.bool,
};

Button.defaultProps = {
  color: false,
  wide: false,
};

export default Button;
