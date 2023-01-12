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

function Home(){

    const navigate = useNavigate();
    
    return(
        <section>
            <div className="light-gray"></div>
            <div className="home">
                <div className="home-top">
                    <Icon path={mdiCheckDecagramOutline}/>
                    <div className="menu">
                        <button>Nova Transação</button>
                        <button onClick={() => navigate('/login')}><Icon path={mdiLogout} /></button>
                    </div>
                </div>
                <div className="home-cards">
                    <Card text="Entradas" icon={mdiArrowUpBoldCircleOutline} value="1250" iColor={'#03875f'}/>
                    <Card text="Saídas" icon={mdiArrowDownBoldCircleOutline} value="1250" iColor={'#fc4d6e'}/>
                    <Card text="Total" icon={mdiCurrencyUsd} value="1250" iColor={'white'}/>
                </div>
                <div className="search-field">
                    <input type="text" name="search" id="search" />
                    <button className='search-button'><Icon path={mdiMagnify }/> Buscar</button>
                </div>
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="table-section_body">
                        <Item description="Desenvolvimento" price="1203" category="Venda" date="2023-04-11"/>
                        <Item description="Aluguel" price="2133" category="Conta" date="2023-04-11"/>
                        <Item description="Servidor" price="1233" category="Conta" date="2023-04-11"/>
                        <Item description="Configuração banco de dados" price="3333" category="Venda" date="2023-04-11"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;