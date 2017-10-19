import React, {Component} from 'react';
import Home from '../../containers/Home/Home'
import Connect from '../../containers/Connect/Connect'
import Header from '../Header/Header'

class App extends Component {
    render() {
        return (
            <div className="body">
                <Header/>
                <div id="bodyContainer">
                    <Home/>
                    <Connect/>
                </div>

            </div>

        );
    }
}

export default App;
