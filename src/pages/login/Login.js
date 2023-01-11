import './Login.css'
import Icon from '@mdi/react'
import { mdiCheckDecagramOutline } from '@mdi/js';
import { mdiEyeOutline } from '@mdi/js';
import { mdiEyeOffOutline } from '@mdi/js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(){   

    const [showEye, setShowEye] = useState(true);
    const navigate = useNavigate();

    function changeEye(){
        showEye ? setShowEye(false) : setShowEye(true)  
        document.querySelector('#pass').type = showEye ? 'text' : 'password';
    }

    return(
        <section>
            <div className="login">
                <div className="login-logo">
                    <Icon path={mdiCheckDecagramOutline}/>
                </div>
                <div className="login-form">
                    <input type="text" name="user" id="user" placeholder='Insira seu usuário' />
                    <div className="view-pass">
                        <input type="password" name="pass" id="pass" placeholder='Insira sua senha' />
                        {
                            showEye ? <button onClick={changeEye}><Icon path={mdiEyeOutline}/></button> : <button onClick={changeEye}><Icon path={mdiEyeOffOutline}/></button>
                        }
                    </div>
                    <button onClick={() => navigate('/')}>Entrar</button>
                </div>
                <div className="login-footer">
                    <p>Caso tenha problemas pra entrar, contate o <a href='#'>suporte aqui.</a></p>
                </div>
            </div>
        </section>
    )
}

export default Login;