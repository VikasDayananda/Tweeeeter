import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
var divStyle={
    position: 'fixed',
    marginLeft:'60%',
    height: '70%',
width: '20%',
backgroundColor: 'powderblue'

}
class Connect extends Component {
    render() {
        return (
            <div style={divStyle} className="w3-card-4">
                    Sign in with Twitter.
            </div>
        );
    }
}

export default Connect;
