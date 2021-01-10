import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    console.log('btn', buttonName);
    console.log('calculation', calculate({ total, next, operation }, buttonName));
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next } = this.state;
    console.log('total', total);
    console.log('next', next);
    return (
      <>
        <Display result={next || total || 0} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
