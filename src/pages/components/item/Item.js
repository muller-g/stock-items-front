import './Item.css'

function Item({description, price, category, date}){
    return(
        <div className="item">
            <div className="col">
                <p>{description}</p>
            </div>
            <div className="col">
                <p style={ category == 'entrada' ? {color: '#03875f'} : {color: '#fc4d6e'}}>
                    {price.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}
                </p>
            </div>
            <div className="col">
                { category == 'entrada' ? <p>{'Entrada'}</p> : <p>{'Saída'}</p> }
            </div>
            <div className="col">
                <p>{date.slice(0, -17).split('-').reverse().join('/')}</p>
            </div>
        </div>
    )
}

export default Item;