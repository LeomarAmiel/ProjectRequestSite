import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';

injectGlobal`
    html {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        @media screen and (min-width: 360px) {
            font-size: 20px;
        }
        @media screen and (min-width: 768px) {
            font-size: 22px;
        }
        @media screen and (min-width: 1024px) {
            font-size: 24px;
        }
    }
`;

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>
        );
    }
}

export default App;
