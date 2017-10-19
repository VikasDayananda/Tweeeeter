import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
var divStyle={
    position: 'fixed',
    height: '70%',
    width: '40%',
    top:'7em',
    left:'5em',

    backgroundColor:'#0084b4'
}
class Home extends Component {
    render() {
        return (
           <div style={divStyle} className="w3-card-4">
               <p>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>
                   1. <br/>


                   <img src="http://via.placeholder.com/350x150" alt="tweeeeter"/>
               </p>

           </div>
        );
    }
}

export default Home;
