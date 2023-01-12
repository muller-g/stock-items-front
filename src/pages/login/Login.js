import { mdiCheckDecagramOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import './Login.css';

function Login(){   

    const { login } = useContext(AuthContext);

    const [showEye, setShowEye] = useState(true);
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function changeEye(){
        showEye ? setShowEye(false) : setShowEye(true)  
        document.querySelector('#pass').type = showEye ? 'text' : 'password';
    }

    function loginSystem(){
        if(email && password){
            login(email, password);
        } else {
            console.log("erro")
        }
    }

    return(
        <section>
            <div className="login">
                <div className="login-logo">
                    <Icon path={mdiCheckDecagramOutline}/>
                </div>
                <div className="login-form">
                    <input type="text" name="user" id="user" placeholder='Insira seu usuário' onChange={(e) => setEmail(e.target.value)}/>
                    <div className="view-pass">
                        <input type="password" name="pass" id="pass" placeholder='Insira sua senha' onChange={(e) => setPassword(e.target.value)}/>
                        {
                            showEye ? <button onClick={changeEye}><Icon path={mdiEyeOutline}/></button> : <button onClick={changeEye}><Icon path={mdiEyeOffOutline}/></button>
                        }
                    </div>
                    <button onClick={loginSystem}>Entrar</button>
                </div>
                <div className="login-footer">
                    <p>Caso tenha problemas pra entrar, contate o <a href='#'>suporte aqui.</a></p>
                </div>
            </div>
        </section>
    )
}

export default Login;