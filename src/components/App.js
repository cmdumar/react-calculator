import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
