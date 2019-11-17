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
        const {token} = this.props.usuarios;
        return(
            <div>
                <Page token={token} />
            </div>
        )
    }
    
}
const mapStateToProps = (store) => {
    return store.usuariosReducers
}
export default connect(mapStateToProps, authsActions)(Home);