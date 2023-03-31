import React from 'react'
import './App.css';

// Import components
import Nav from './components/Nav';

import Tweets from './components/Tweets';

function App() {

  /*
  const tweetsArray = [
    {name:'David', age:35, tweet:'this is a tweet'},
    {name:'Account1', age:00, tweet:'of course!'},
    {name:'John', age:15, tweet:'hello world'}
  ]
  */

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

export default App;
