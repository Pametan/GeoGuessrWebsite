import React from 'react';
import {hot} from "react-hot-loader/root";

const numbers = [1,2,3,4,5];
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const doubled = numbers.map((number) => number*2);
console.log(doubled);

class App extends React.Component{
  render() {
    return(
      <>
        <NumberList numbers={numbers} />
        <div className="App">
          <h1> Hello, world! </h1>
        </div>
      </>
    );
  }
}
export default hot(App);
