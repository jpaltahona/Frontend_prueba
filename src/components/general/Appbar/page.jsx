import React from 'react';
import { IoLogoTwitter } from "react-icons/io";

const Page = () => {
    return(
        <div className="appBar">
            <div className="appBar__navigate">
                <div>
                    <ul>
                        <li className="logo">
                            <IoLogoTwitter />
                        </li>
                        <li>
                            sobre nosotros
                        </li>
                    </ul>
                </div>
                <div>
                    Idioma
                </div>
            </div>
           
        </div>
    )
}
export default Page;