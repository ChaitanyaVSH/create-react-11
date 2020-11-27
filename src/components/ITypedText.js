import React, { Component } from 'react';
import {init} from "ityped";
const greet = require("greetingmessage");

/**
 * This Component is designed to implement the typed text in the NavBar Component.
 * 
 * Plugins: https://ityped.surge.sh/
 * Docs: https://github.com/luisvinicius167/ityped
 */
class ITypedText extends Component {

    componentDidMount(){
        const timeNow = greet.greetingMessage();

        const myElement = document.querySelector('#myElement')
        init(myElement, {
            strings: ["Good " + timeNow],
            loop: false,
            typeSpeed: 100,
            showCursor: false,
        })

        const userNameElement = document.querySelector('#userName')
        init(userNameElement, {
            strings: [this.props.userName + "..."],
            loop: false,
            typeSpeed: 100,
            startDelay: 2500,
            showCursor: false,
        })
    }

    render(){
        return (
        <div>
            <div id="myElement" className="display-2"></div>
            <div id="userName" className="display-2"></div>
        </div>
        )
    }
}

export default ITypedText;
