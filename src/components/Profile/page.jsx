import React from 'react';
import Sidebar from './Sidebar';
import Layout from './Layout';
const Page = (props) =>  {
    return(
        <div className="container-fluid profile-conten">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar profile={props.profile} />
                </div>
                <div className="col-md-7 px-4">
                    <Layout>
                        <div className="profile">
                            <div className="profile__portada"
                            style={{ backgroundImage: `url(${props.banner})` }}
                            >                   
                                <div className="profile__portada__avatar">
                                    <img src={props.profile}/>
                                </div>
                                <div className="btn-edit">Editar Perfil</div>
                            </div>
                            
                            <div className="profile__info">
                                <h4>{props.name}</h4>
                                <p>{props.screen_name}</p>
                                <p>{props.description}</p>
                            </div>
                            
                        </div>
                    </Layout>
                </div>
                <div className="col-md-3">
                    last post
                </div>
            </div>
        </div>
    )
}  

export default Page;