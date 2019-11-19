import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {FiSearch, FiMessageCircle ,FiUsers } from "react-icons/fi";

const Page = (props) =>  {
    return(
        <div className="container-fluid">
            <div className="row contentHome">
                <div className="col-md-6 sectionOne">
                    <FaTwitter className="bgIcon"/>
                    <ul>
                        <li><FiSearch/> Sigue lo que te interesa.</li>
                        <li><FiUsers /> Entérate de lo que está hablando la gente.</li>
                        <li><FiMessageCircle /> Únete a la conversación.</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <section className="sectiontwo">
                        <FaTwitter />
                        <h1>Descubre lo que está pasando en el mundo en este momento</h1>

                        <h5>Únete hoy a Twitter.</h5>
                        <button className="btn btn-primary" >
                                Regístrate
                        </button>
                        <button className="btn btn-outline-primary">
                            <a  href={`http://localhost:4000/auth/twitter`}>
                                Iniciar Sesion
                            </a>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}  

export default Page;