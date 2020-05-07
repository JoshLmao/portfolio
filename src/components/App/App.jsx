import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route 
} from 'react-router-dom';

import Home from '../Home';
import NavigationBar from '../NavigationBar';
import FourOhFour from '../FourOhFour';

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            
            <Switch>
                {/* Landing/Home page of site */}
                <Route exact path="/" component={Home} />

                {/* Cover 404, page not found */}
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
