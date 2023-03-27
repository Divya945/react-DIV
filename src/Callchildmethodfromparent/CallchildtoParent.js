import React from 'react';

//call child method from parent in React by using class component
class CallchildtoParent extends React.Component {
  constructor() {
    super();
    this.child = React.createRef();
  }
  onClick = () => {
    this.child.current.getMessage();
  };
  render() {
    return (
      <div className="taskblock">
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click me </button>
      </div>
    );
  }
}
class Child extends React.Component {
  getMessage() {
    alert('call child method from parent in React by using class component');
  }
  render() {
    return <h1>call child method from parent using class component</h1>;
  }
}
export default CallchildtoParent;
