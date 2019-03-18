import React from 'react';
import PrevNext from './prevNext';

const start = (props)=>{
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Welcome to the NYC DHS Survey, press arrows to start survey
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
            <PrevNext/>
        </div>
      );
}

export default start;