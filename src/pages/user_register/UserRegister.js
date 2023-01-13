import './UserRegister.css'
import { mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiWindowClose } from '@mdi/js';
import { useEffect, useState } from 'react';

function UserRegister(){

    const [charN, setCharN] = useState(false)
    const [charSpecial, setCharSpecial] = useState(false)
    const [charNumbers, setCharNumbers] = useState(false)
    const [charEqual, setCharEqual] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const regex = /[0-9]/;
    const regex2 = /\W|_/;

    useEffect(() => {
        if(password == passwordConfirm){
            setCharEqual(true)
        }

        if(regex.test(password)){
            setCharNumbers(true)
        }

        if(regex2.test(password)){
            setCharSpecial(true)
        }

        if(password.length == 7){
            setCharN(true)
        }
    }, [password, passwordConfirm])

    return(
        <section>
            <div className="light-gray"></div>
            <div className="user-register">
                <div className="user-register_form">
                    <h1>Cadastro de usuário</h1>
                    <input type="text" name="name" id="name" placeholder='Nome'/>
                    <input type="email" name="email" id="email" placeholder='E-mail'/>
                    <input type="password" name="pass" id="pass" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password_confirmation" name="pass_confirm" id="pass_confirm" placeholder='Confirmação da senha' onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    <div className="password-validation">
                        <div className="two-item">
                            <Icon path={charN ? mdiCheck : mdiWindowClose}/><span>8 caracteres</span>
                            <Icon path={charSpecial ? mdiCheck : mdiWindowClose}/><span>caractere especial</span>
                            <Icon path={charNumbers ? mdiCheck : mdiWindowClose}/><span>numeros</span>
                            <Icon path={charEqual ? mdiCheck : mdiWindowClose}/><span>senhas iguais</span>
                        </div>
                    </div>
                    <div className="two-btn">
                        <button>Cadastrar</button>
                        <button>Voltar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserRegister;