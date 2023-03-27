import React from 'react';

//call child method from parent in React by Using callback Ref API
class CallchildtoParentRef extends React.Component {
  render() {
    return (
      <div className="taskblock">
        <ChildRef
          ref={(instance) => {
            this.child = instance;
          }}
        />
        <button
          onClick={() => {
            this.child.getMessagerf();
          }}
        >
          Click me{' '}
        </button>
      </div>
    );
  }
}
class ChildRef extends React.Component {
  getMessagerf() {
    alert('call child method from parent in React by Using callback Ref API');
  }
  render() {
    return <h1> call child method from parent using callback Ref API</h1>;
  }
}
export default CallchildtoParentRef;
