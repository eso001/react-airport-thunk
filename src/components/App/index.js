import React from 'react';
import { Route } from 'react-router-dom'

// Components
import Header from '../global/Header';
import Home from '../Home';
import Search from '../Search';
import './App.css';

const App = () => (
    <div>
        <Header />
        <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Search}/>
        </main>
    </div>
)

export default App;
