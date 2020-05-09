import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route 
} from 'react-router-dom';

import Home from '../Home';
import NavigationBar from '../NavigationBar';
import FourOhFour from '../FourOhFour';
import AllProjects from "../AllProjects";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            
            <Switch data-spy="scroll" data-target=".navbar">
                {/* Landing/Home page of site */}
                <Route exact path="/" component={Home} />
                {/* Page full of all projects configured in projects.json */}
                <Route path="/projects" component={AllProjects}/>

                {/* Cover 404, page not found */}
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
