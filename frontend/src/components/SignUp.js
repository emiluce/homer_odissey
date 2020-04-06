import React from 'react';
import ReactDOM from 'react-dom';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1>test@test.com</h1>
        <input type="email" name="email" onchange="myFunction(this.value)" />
      </div>
    );
  }
}
export default SignUp;

ReactDOM.render(
  <SignUp />,
  document.getElementById('root')
);