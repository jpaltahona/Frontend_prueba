import PropTypes from "prop-types";
import React, { Component } from "react";
import Snipper from '../../general/Spinner';

import { connect } from 'react-redux';
import * as authsActions from '../../../redux/actions/authActions';
class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      profileImageUrl: PropTypes.string,
      twitterId: PropTypes.string,
      screenName: PropTypes.string,
      _id: PropTypes.string
    })
  };
  constructor(props){
    super(props)
      this.state = {
        error: null,
        authenticated: false
      };
  }
 

async componentDidMount() {
    if(typeof this.props.oauth.id == 'undefined'){
        await this.props.traerTodos();
        this.setState({
            authenticated: true
        })
    }
}
  Autentication = () => {
    const { authenticated } = this.state;
    const { name ,profileImageUrl , screenName ,twitterId ,_id} = this.props.oauth;
    if(this.props.cargando){
        return  <Snipper />
    }
      return (
            <>
                {!authenticated ? (
                    <div>
                        <h1>Welcome!</h1>
                        <p>No pudiste autenticarte</p>
                    </div>
                ):
                <div>
                    <p>publicaciones de {name}</p> 
                    {twitterId}<br />
                    {_id}<br />
                    {screenName}<br />
                    {profileImageUrl}<br />
                 </div>
                }
                
            </>
        )
    }
  render() {
        console.log(this.props)
        return (
          <div>
            {this.Autentication()}
          </div>
    );
  }
}
const mapStateToProps = (store) => {
  return store.AuthReducers
}
export default connect(mapStateToProps, authsActions )(Login);