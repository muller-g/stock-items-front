import './Home.css'
import Icon from '@mdi/react'
import { mdiCheckDecagramOutline } from '@mdi/js';
import Card from '../components/card/Card';
import { mdiArrowUpBoldCircleOutline } from '@mdi/js';
import { mdiArrowDownBoldCircleOutline } from '@mdi/js';
import { mdiCurrencyUsd } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Item from '../components/item/Item';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import { useContext, useEffect, useState } from 'react';
import ModalTransition from '../components/modal_transition/ModalTransition';
import axios from 'axios';

function Home(){

    const { logout, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [outs, setOuts] = useState([]);
    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    
    function openModal(){
        document.querySelector('.modal-transition').classList.toggle('modal_on')
    }

    function search(){
        axios.post(process.env.REACT_APP_API + '/auth/spending-search', {
            user_id: localStorage.getItem('user_id'),
            search: searchTerm
        },{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res =>
            setData(res.data)
        )
    }

    useEffect(() => {
        axios.post(process.env.REACT_APP_API + '/auth/spending-user', {
            user_id: localStorage.getItem('user_id')
        },{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res =>
            setData(res.data)
        )

        axios.post(process.env.REACT_APP_API + '/auth/spending-entries', {
            user_id: localStorage.getItem('user_id')
        },{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res =>
            setEntries(res.data)
        )

        axios.post(process.env.REACT_APP_API + '/auth/spending-outs', {
            user_id: localStorage.getItem('user_id')
        },{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res =>
            setOuts(res.data)
        )
    }, [])

    return(
        <>
        <section>
            <div className="light-gray"></div>
            <div className="home">
                <div className="home-top">
                    <Icon path={mdiCheckDecagramOutline}/>
                    <div className="menu">
                        <button onClick={openModal}>Nova Transação</button>
                        <button onClick={logout}><Icon path={mdiLogout} /></button>
                    </div>
                </div>
                <div className="home-cards">
                    <Card text="Entradas" icon={mdiArrowUpBoldCircleOutline} value={entries} iColor={'#03875f'}/>
                    <Card text="Saídas" icon={mdiArrowDownBoldCircleOutline} value={outs} iColor={'#fc4d6e'}/>
                    <Card text="Total" icon={mdiCurrencyUsd} value="1250" iColor={'white'}/>
                </div>
                <div className="search-field">
                    <input type="text" name="search" id="search" onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button className='search-button' onClick={search}><Icon path={mdiMagnify }/> Buscar</button>
                </div>
                <div className="table-section">
                    <div className="table-section_title">
                        <div className="col">
                            <p>Descrição</p>
                        </div>
                        <div className="col">
                            <p>Preço</p>
                        </div>
                        <div className="col">
                            <p>Categoria</p>
                        </div>
                        <div className="col">
                            <p>Data</p>
                        </div>
                    </div>
                    <div className="table-section_body">
                        {
                            data?.map((dat, i) => 
                                <Item key={i} description={dat?.description} price={dat?.price} category={dat?.category} date={dat?.created_at}/>
                            )   
                        }
                    </div>
                </div>
            </div>
        </section>
        <ModalTransition />
        </>
    )
}

export default Home;