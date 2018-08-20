import React, { Component } from 'react'

export default class TestHistory extends Component {
    render() {
        if(!this.props.history) return null;

        // get date of test
        const   unixTime	    = Math.round((new Date()).getTime() / 1000),
                fDate			= new Date(unixTime * 1000),
                day				= fDate.getDate(),
                month			= '0' + (fDate.getMonth() + 1),
                year			= fDate.getFullYear(),
                hours			= fDate.getHours(),
                minutes		=	'0' + fDate.getMinutes(),
                seconds		=	'0' + fDate.getSeconds(),
                date        =   day + '/' + month.substr(month.length-2) + '/' + year + ' - ' + hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2)

        return (
            <div>
                {
                    this.props.history.map(function(test, index) {
                        return (
                            <div className="test" key={index}>
                                <div className="title">{date}</div>
                                <div className="desc">{test.correct} correct - {test.wrong} wrong</div>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}
