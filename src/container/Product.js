import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from '../data/ProductList';
import { Card, Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Magnifier from 'react-magnifier';
import { addItem } from '../redux/reducer/Cart';
import { Alert } from '@mui/material';
const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alert,setAlert] = useState(false);
    const props = ProductList.find((element) => element.id === parseInt(params.id));
    const list = useSelector((state)=> state.cart.list)
    const element = list.find((item) => item.id === props.id);
    const addToCart = () =>{
        setAlert(true);
        setTimeout(()=>setAlert(false),3000);
        dispatch(addItem(props));
    } 
    return (
        <div>
            <Container className='mt-5'>
                {alert && <Alert severity="success">Order placed Successfully</Alert>}
                <div className="p-5 m-3 prod_cover">\
                
                    <Card className='p-4 prod_card'>
                        <Row>
                            <div className='col-6 d-flex align-self-center justify-content-center'>
                            <Magnifier 
                            mgShape='square'
                            mgBorderWidth='0'
                            zoomFactor='1' 
                            src={props.thumbnail} className="detail_prod_image" />
                            </div>
                            <div className='col-6 prod_info p-5'>
                                <h6 className="my-3 prod_name">{props.title}</h6>
                                <div className='mb-4'>
                                    <span className="prod_desc">{props.description}</span>
                                </div>
                                <table className='w-100 prod_table'>
                                    <tr>
                                        <td><span className="card_title">Price</span> </td>
                                        <td><span>$ {props.price}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="card_title">Brand</span> </td>
                                        <td><span>{props.brand}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="card_title">Category</span> </td>
                                        <td><span>{props.category}</span></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='card_title'>Rating
                                        </h6></td>
                                        <td><span className='rating_value'>{props.rating}</span>
                                            <i class="fa fa-star star_rating"></i></td>
                                    </tr>
                                </table>
                                <div className="detail_product">
                                    {props.Stock > 0 ?
                                        (<>
                                            <Button variant="success" className='mx-3'>Buy Now</Button>
                                            { element?.count > 0 ? (
                                                <Button variant="warning" className='mx-3' onClick={() => navigate('/checkout')}>Go to cart</Button>)
                                                :
                                               ( <Button variant="success" className='mx-3' onClick={addToCart}>Add to cart</Button>)
                                            }
                                        </>) :
                                        (<Button variant="outline-danger">Out of stock</Button>)
                                    }
                                </div>
                            </div>
                        </Row>
                        {props.discountPercentage > 50 ?
                            <span className="discount_circle"> {props.discountPercentage} % </span> :
                            <span className="mega_discount_circle"> {props.discountPercentage} % </span>}
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default Product
