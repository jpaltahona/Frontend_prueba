import React , { Component } from 'react';
import Page from './page.js';
import './styles.scss';

class Home extends Component{

    render(){
      console.log(this.props)
        return(
            <div>
                <Page/>
            </div>
        )
    }
    
}

export default Home;