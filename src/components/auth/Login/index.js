import React, { Component }from 'react';
import Page from './page';
import { connect } from 'react-redux';
import * as usuariosActions from '../../../redux/actions/UsuariosActions';
import Axios from 'axios';

import './styles.scss';

class Login extends Component{

 componentDidMount(){


        this.props.traerTodos()
    }

    render(){
        console.log(this.props)
        return(
            <div className="login">
                <Page />
            </div>
        )
    }
    
}
const mapStateToProps = (store) => {
    return store.usuariosReducers
}
export default connect(mapStateToProps, usuariosActions)(Login);