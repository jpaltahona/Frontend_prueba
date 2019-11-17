import React from 'react';

const Page = () => {
    return(
        <div className="login__content">
            <div className="form">
                <form>
                    <h2>Inicia sesión en Twitter</h2>
                    <div>
                        <input type="text" placeholder="Teléfono, correo o usuario"/>
                    </div>
                    <div>
                        <input type="password" placeholder="contraseña"/>
                    </div>
                    <div>
                        <button className="btnLogin"> iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Page;