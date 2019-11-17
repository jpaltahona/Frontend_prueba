import React, {Component } from 'react';
import { connect } from 'react-redux'
import * as profileDatesActions from '../../redux/actions/profileDatesActions';
import Page from './page';
import './styles.scss';

class Profile extends Component {

    componentDidMount(){
        this.props.getInfoProfile()
    }

    render(){
        console.log(this.props)
        const {
            id, name, screen_name, followers_count, location,
            profile_background_image_url, profile_banner_url, profile_image_url , description
        } = this.props.infoProfile;
        return(
            <Page   id={id}
                    name={name}
                    profile={profile_image_url}
                    banner={profile_banner_url}
                    screen_name={screen_name}
                    description={description}
            />
        )
    }
}


const mapStateToProps = (store) => {
    return store.profileDatesReducers
}
export default connect(mapStateToProps, profileDatesActions)(Profile);