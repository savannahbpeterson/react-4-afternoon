import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';

export default (
    <Switch>
        <Route path='/about' component={}/>
        <Route path='/' component={Home}/>
    </Switch>

)
