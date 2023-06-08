import { useState } from "react"

const Card = ({product}) => {
    const [items, setItems] = useState(0)
  return (
    <div className='card'>
        <img src={product.image} />
        <div className=" card-body">
            <div className=" d-flex justify-content-between">
            <h4>{product.name}</h4>
            <p>{product.price}$</p>
            </div>
            <button  className="btn btn-outline-dark" >Setete Ekle</button>

        </div>
    </div>
  )
}

export default Card