import React, { Fragment, Component } from 'react';
import TypingTest from "./typing-test";
import Icon from "./icon";
import { createStore } from 'redux';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <div className="main columns">
                    <div className="column test">
                        <div className="section words">
                            <div className="typingtest">
                                <TypingTest />
                            </div>
                        </div>
                    </div>
                    <div className="column history">
                        <h2>Test Feed</h2>
                        <div className="tests">
                            <div className="test">
                                <div className="title">4:27pm - August 17th</div>
                                <div className="desc">10 correct - 2 wrong</div>
                            </div>
                            <div className="test">
                                <div className="title">4:22pm - August 17th</div>
                                <div className="desc">14 correct - 1 wrong</div>
                            </div>
                            <div className="test">
                                <div className="title">4:18pm - August 17th</div>
                                <div className="desc">4 correct - 0 wrong</div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    Built by <a href="http://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - Source code on <Icon icon="github" /><a href="https://github.com/Haydzyo/Typing-Speed-Test" target="_blank" rel="noopener noreferrer">GitHub</a>
                </footer>
            </Fragment>
        );
    }
}

export default Home;

// default reducers
const defaultState = {
    testHistory: []
}

// set reducers
const testHistory = (state = defaultState, action) => {
    switch(action.type)
    {
        case 'UPDATE_TESTHISTORY':
            return { ...state, testHistory: { correct: action.correct, wrong: action.wrong } }
        default:
            return state;
    }
}

// create store
const store = createStore(testHistory);

console.log(store.getState());

// disptach actions
store.dispatch({
    type: 'UPDATE_TESTHISTORY',
    correct: 8,
    wrong: 1
})

console.log(store.getState());
store.dispatch({
    type: 'UPDATE_TESTHISTORY',
    correct: 4,
    wrong: 3
})


console.log(store.getState());
