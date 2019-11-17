import React, {Component } from 'react';

class Feed extends Component {

    componentDidMount(){
        const access = this.props.location.search;
        const tokens = access.split("&");
        console.log(tokens);

    }

    render(){
        console.log(this.props)
 
        return(
            <h1>Hello soy el fedd de noticas</h1>
        )
    }
}

export default Feed;