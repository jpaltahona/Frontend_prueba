import React, {Component } from 'react';
import { connect } from 'react-redux'
import Snipper from '../general/Spinner';
import * as authsActions from '../../redux/actions/authActions';
import Page from './page';
import './styles.scss';

class Profile extends Component {

    componentDidMount(){
        this.props.userGetData();
        console.log(this.props)
    }

    render(){
        return(
                <Page   
            />
        )
    }
}


const mapStateToProps = (store) => {
    return store.AuthReducers
  }
  export default connect(mapStateToProps, authsActions )(Profile);