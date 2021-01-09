import { string } from 'prop-types';

function Button({ name }) {
  return (
    <div>{name}</div>
  );
}

Button.propTypes = {
  name: string.isRequired,
};

export default Button;
