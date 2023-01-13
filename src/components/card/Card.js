import './Card.css'
import Icon from '@mdi/react'

function Card({text, icon, value, iColor}){
    return(
        <div className="card">
            <div className="card-info">
                <span>{text}</span>
                <Icon path={icon} style={{
                    color: iColor
                }}/>
            </div>
            <div className="card-value">
                <h1>{(value / 100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</h1>
            </div>
        </div>
    )
}

export default Card;