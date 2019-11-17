import React from 'react';
//import Login from './auth/Login';
import Home from './Home';
import Profile  from './Profile';
import { BrowserRouter as Router, Switch ,Route, Link } from 'react-router-dom';

function App() {
    return (
        
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth/twitter" component={Profile} />
                </Switch>
            </Router>
        
    );
}

export default App;
