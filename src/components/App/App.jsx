import React from 'react';
import { 
    HashRouter,
    Switch,
    Route 
} from 'react-router-dom';

import Home from '../Home';
import NavigationBar from '../NavigationBar';
import FourOhFour from '../FourOhFour';
import AllProjects from "../AllProjects";
import "./App.css";
import "../../fonts/jost/Jost.css";

function App() {
    return (
        <HashRouter>
            <NavigationBar />
            
            <Switch data-spy="scroll" data-target=".navbar">
                {/* Landing/Home page of site */}
                <Route exact path="/" component={Home} />
                {/* Page full of all projects configured in projects.json */}
                <Route path="/projects" component={AllProjects}/>

                {/* Cover 404, page not found */}
                <Route component={FourOhFour} />
            </Switch>
        </HashRouter>
    );
}

export default App;
