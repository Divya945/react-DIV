import React from 'react';

class FizzBuzz extends React.Component {
  state = {
    count: 1,
  };

  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="taskblock">
        <h1>React Fizz Buzz</h1>

        <h2>
          {this.state.count % 15 === 0
            ? 'FizzBuzz'
            : this.state.count % 3 === 0
            ? 'Fizz'
            : this.state.count % 5 === 0
            ? 'Buzz'
            : this.state.count}
        </h2>
        <button onClick={this.handleDecrement}> - </button>
        <button onClick={this.handleIncrement}> + </button>
      </div>
    );
  }
}

export default FizzBuzz;
