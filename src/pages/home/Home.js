import './Home.css'
import Icon from '@mdi/react'
import { mdiCheckDecagramOutline } from '@mdi/js';
import Card from '../components/card/Card';
import { mdiArrowUpBoldCircleOutline } from '@mdi/js';
import { mdiArrowDownBoldCircleOutline } from '@mdi/js';
import { mdiCurrencyUsd } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';

function Home(){
    return(
        <section>
            <div className="light-gray"></div>
            <div className="home">
                <div className="home-top">
                    <Icon path={mdiCheckDecagramOutline}/>
                    <button>Nova Transação</button>
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
            </div>
        </section>
    )
}

export default Home;