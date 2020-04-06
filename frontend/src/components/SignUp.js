import React from 'react';
import ReactDOM from 'react-dom';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.value}</h1>
        <form>
          <input type="email" name="email" onchange="myFunction(this.value)" placeholder="E-mail" />
          <input type="password" name="password" onchange="myFunction(this.value)" placeholder="password" />
          <input type="passwordconf" name="passwordconf" onchange="myFunction(this.value)" placeholder="Confirm password" />
          <input type="name" name="name" onchange="myFunction(this.value)" placeholder="name" />
          <input type="lastname" name="lastname" onchange="myFunction(this.value)" placeholder="lastname" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SignUp;

ReactDOM.render(
  <SignUp />,
  document.getElementById('root')
);