import React , { Component } from 'react';
import Page from './page.js';
import { connect } from 'react-redux';
import * as authsActions from '../../redux/actions/authActions';
import './styles.scss';

class Home extends Component{

    componentDidMount(){
        this.props.traerTodos();
    }
    render(){
        const {token} = this.props.oauth;
      console.log(this.props)
        return(
            <div>
                <Page token={token}/>
            </div>
        )
    }
    
}
const mapStateToProps = (store) => {
    return store.AuthReducers
}
export default connect(mapStateToProps, authsActions)(Home);