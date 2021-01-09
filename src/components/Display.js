import { string } from 'prop-types';

function Display({ result }) {
  return (
    <div>{result}</div>
  );
}

Display.propTypes = {
  result: string.isRequired,
};

export default Display;
