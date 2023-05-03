import React from "react";
import Logo from "./logo.svg";
import './App.css';

function App() {

  const gen = function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = res.json();
    console.log(data);
  }
  console.log(gen().next());
  console.log(gen().next());
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo">
          <Logo />
        </span>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
