import React from 'react';
import { IoLogoTwitter, IoIosNotificationsOutline , IoMdListBox} from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FiMail, FiHash, FiBookmark, FiMoreHorizontal } from "react-icons/fi";


const Sidebar = (props) => {
    return(
        <div className="sidebar">        
            <ul>
                <li className="logo">
                    <IoLogoTwitter />
                </li>
                <li>
                    <GoHome /> Inicio
                </li>
                <li>
                    <FiHash/> Descubir
                </li>
                <li>
                    <IoIosNotificationsOutline/> Notificaciones
                </li>
                <li>
                    <FiMail/> Mensajes
                </li>
                <li>
                    <FiBookmark /> Guardados
                </li>
                <li>
                  <IoMdListBox />  Listas
                </li>
                <li>
                  
                </li>
                <li>
                  < FiMoreHorizontal /> Más opciones
                </li>
                <li>
                   <button className="btn btn-primary px-4"> Twittear </button>
                </li>
            </ul>           
        </div>
       
    )
}
export default Sidebar;