import React from 'react';
import Home from './Home';
import Profile  from './Profile';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

function App() {
    return (
        
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Router>
        
    );
}

export default App;
