import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
var divStyle={
    position: 'fixed',
    height: '70%',
    width: '47%',
    left:'2%'
}
class Home extends Component {
    render() {
        return (
           <div style={divStyle} className="w3-card-4">
               <p id="textParagraph">
                   Tweet more than 140 charecters <strong>?</strong> <i class="em em-disappointed "/><br/>
                   Very long tweeeeets <i class="em em-hushed"/>, you reached a right place.<i class ="em  em-smiley"/><br/>
                   Your 'Tweeeeeeeeeet' <i class="em em-black_nib"/>  <strong>+</strong> our idea <i class="em  em-heavy_exclamation_mark"/> <strong>=</strong> <i class="em em-clap"/>
               </p>

           </div>
        );
    }
}

export default Home;
