import React from 'react';
//import Login from './auth/Login';
import Appbar from './general/Appbar';
import Home from './Home';
import Feed  from './Feed';
import { BrowserRouter as Router, Switch ,Route, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <Appbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth/twitter" component={Feed} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
