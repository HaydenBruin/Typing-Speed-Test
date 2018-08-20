import React, { Component } from 'react'

export default class TestHistory extends Component {
    render() {
        if(!this.props.history) return null;
        return (
            <div>
                {
                    this.props.history.map(function(test) {
                        return (
                            <div className="test">
                                <div className="title">0:00pm - Month 00st</div>
                                <div className="desc">10 correct - 2 wrong</div>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}
