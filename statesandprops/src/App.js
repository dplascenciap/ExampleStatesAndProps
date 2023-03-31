import React, {useState} from 'react'
import './App.css';

// Import components
import Nav from './components/Nav';

import Tweets from './components/Tweets';

/** The following code is an example of how to use props
 * I'll comment it to start a new App() and demonstrate the use of states
*/

/*
function App() {
  return (
  <div className="App">
    <h1>Hello React</h1>
    <div className='home'>
      <Nav />
      <Tweets />
    </div>
  </div>
  );
}
*/

function App() {

  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    // Since we are using states, it not possible to use the line below:
    // counter += 1;
    // Instead, we use the function associated with the variable 'counter'.
    // In other words, we use 'setCounter' to modify the variable 'counter'.
    // We can use a function like the one shown below:
    // setCounter((prev) => prev + 1)
    // We can also use a function like:
    setCounter(counter + 1)
    console.log(counter);
  };

  const toggleClass = () => {
    setToggle((prevState) => !prevState);
  };

  // Refer to App.css to see the definition of className="active"

  return (
  <div className="App">
    <h1 className={toggle ? "active" : ""}>Hello React</h1>
    <h2>Counter {counter}</h2>
    <button onClick={incrementer}>Increment Counter</button>
    <button onClick={toggleClass}>Toggle Active</button>
  </div>
  );
}

export default App;
