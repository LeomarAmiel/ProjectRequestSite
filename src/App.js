import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './components/Home';
import Modal from './components/Modal';
import CombinedReducer from './reducers';

injectGlobal`
    html, body {
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
    };
    button {
        cursor: pointer;
    }
    a {
        cursor: pointer;
    }
`;

const store = createStore(CombinedReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Modal} />
                        <Route path="/signup" component={Modal} />
                        <Modal/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;