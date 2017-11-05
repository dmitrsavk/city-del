import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';

import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
    render() {
        return (
        	<BrowserRouter>
        		<div>
	        		<Route exact path="/" component={LandingPage} />
	        		<Route path="/order" component={MainPage}/>
	        	</div>
        	</BrowserRouter>
        );
    }
}

export default App;
