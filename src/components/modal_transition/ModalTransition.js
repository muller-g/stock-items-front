import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Auth';
import './ModalTransition.css'

function ModalTransition(){

    const { token, success, error } = useContext(AuthContext);
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    function openModal(){
        document.querySelector('.modal-transition').classList.toggle('modal_on')
    }

    function saveSpend(){
        if(!description == '' || price == '' || category == ''){
            axios.post(process.env.REACT_APP_API + '/auth/spending', {
                description: description,
                price: price,
                category: category,
                user_id: localStorage.getItem('user_id'),
            },{
                headers: { Authorization: `Bearer ${token}` }
            }
            ).then( res => 
                window.location.reload()
            ).catch(res => {
                error('Erro ao salvar!')
            })
        }
    }

    return(
        <div className="modal-transition">
            <div className="modal-transition_container">
                <h1>Adicionar novo item</h1>
                <input type="text" name="description" id="description" placeholder='Descrição' onChange={(e) => setDescription(e.target.value)}/>
                <input type="text" name="price" id="price" placeholder='Preço' onChange={(e) => setPrice(e.target.value)}/>
                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="#" disabled selected>Categoria</option>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
                <div className="two-btns">
                    <button onClick={saveSpend}>Adicionar</button>
                    <button onClick={openModal}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTransition;