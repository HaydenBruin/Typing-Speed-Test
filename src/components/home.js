import React, { Fragment, Component } from 'react';
import TypingTest from "./typing-test";
import TestHistory from "./test-history";
import Icon from "./icon";
import { connect } from 'react-redux';

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
                    { this.props.testHistory.length > 0 && 
                        <div className="column history">
                            <h2>Test Feed</h2>
                            <div className="tests">
                                <TestHistory history={this.props.testHistory} />
                            </div>
                        </div>
                    }
                </div>

                <footer>
                    Built by <a href="http://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - Source code on <Icon icon="github" /><a href="https://github.com/Haydzyo/Typing-Speed-Test" target="_blank" rel="noopener noreferrer">GitHub</a>
                </footer>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    testHistory: state.testHistory.tests
})

export default connect(mapStateToProps)(Home)