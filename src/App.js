import React from 'react';
import './App.css';
import './index.css';

class SquaresWithValues extends React.Component {
  render() {
    return (
        <button 
        className={this.props.value}
        onClick={() => this.props.onClick}>
        {this.props.value}
        </button>
    );
  }      
}

class MakeSquares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null }
  }

  renderButton(i) {
    return <SquaresWithValues value={i}    
    />;
  }

  render() {
    return (
      <div className='container'>
        {this.renderButton('blue')}
        {this.renderButton('red')}
        {this.renderButton('yellow')}
      </div>
    );
  }
}

export default MakeSquares;