import './Item.css'

function Item({description, price, category, date}){
    return(
        <div className="item">
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{date}</p>
        </div>
    )
}

export default Item;