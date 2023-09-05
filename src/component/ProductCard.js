import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className=''>
        <div className="p-5 m-3 prod_cover">
          
            <Card className='p-4 prod_card' onClick={() => navigate(`/product/${props.id}`)}>
                <div className='thumb_image_wrapper'>
                    <img src={props.thumbnail}  alt={props.title} className="prod_image" />
                </div>
                <h6 className="my-3 prod_name">{props.title}</h6>
                <div className=''><span className="card_title">Price : $</span><span>{props.price}</span></div>
                {props.discountPercentage > 50 ?
                <span className="discount_circle"> {props.discountPercentage} % </span>:
                <span className="mega_discount_circle"> {props.discountPercentage} % </span>}
            </Card>
            <h6 className='Rating_block m-3'>Rating : <span className='rating_value'>{props.rating}</span><i class="fa fa-star star_rating"></i></h6>
            <div className="">
              {props.Stock> 0 ? <Button variant="success">Available</Button> : <Button variant="outline-danger">Out of stock</Button>}
            </div>
      </div>
    </div>
  )
}

export default ProductCard
