import React, { Component } from 'react';
import TypingTest from "./TypingTest";
import './App.scss';

class App extends Component {

    render() {
        return (
            <div className="section words">
              <div className="typingtest">
                  <TypingTest />
                </div>
            </div>
        );
    }
}

export default App;
