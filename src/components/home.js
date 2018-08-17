import React, { Fragment, Component } from 'react';
import TypingTest from "./typing-test";
import Icon from "./icon";

class Home extends Component {

    render() {
        return (
            <Fragment>
                <div class="main columns">
                    <div className="column test">
                        <div className="section words">
                            <div className="typingtest">
                                <TypingTest />
                            </div>
                        </div>
                    </div>
                    <div class="column history">
                        <h2>Test Feed</h2>
                        <div class="tests">
                            <div class="test">
                                <div class="title">4:27pm - August 17th</div>
                                <div class="desc">10 correct - 2 wrong</div>
                            </div>
                            <div class="test">
                                <div class="title">4:22pm - August 17th</div>
                                <div class="desc">14 correct - 1 wrong</div>
                            </div>
                            <div class="test">
                                <div class="title">4:18pm - August 17th</div>
                                <div class="desc">4 correct - 0 wrong</div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    Built by <a href="http://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - Source code on <a href="https://github.com/Haydzyo/Typing-Speed-Test" target="_blank" rel="noopener noreferrer"><Icon icon="github" /> GitHub</a>
                </footer>
            </Fragment>
        );
    }
}

export default Home;
