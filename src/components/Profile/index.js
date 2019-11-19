import React, { Component } from 'react';
import Snipper from '../general/Spinner';
import Fatal from '../general/Fatal';
import { connect } from 'react-redux';
import * as authUser from '../../redux/actions/authActions';
import Page from './page';
import './styles.scss';

class Profile extends Component {
    constructor(props){
        super(props)
          this.state = {
            authenticated: false
          };
      }
    componentDidMount(){
        this.props.authUser();
        this.setState({authenticated: true})
    }
    Autentication = () => {
        const { authenticated } = this.state;
        const { name ,profileImageUrl , screenName ,twitterId ,_id} = this.props.auth;
        if(this.props.cargando){
            return  <Snipper />
        }
          return (
                <>
                    {!authenticated ? (<Fatal  error={this.props.error}/> ):
                    <Page 
                        name={name}
                        screen_name={screenName}
                        profile={profileImageUrl}
                    />
                    }
                    }
                </>
            )
        }
    render(){
        console.log(this.props)
        return(
            <>
                {this.Autentication()}
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return store.AuthReducers;
}

  export default connect(mapStateToProps, authUser)(Profile);