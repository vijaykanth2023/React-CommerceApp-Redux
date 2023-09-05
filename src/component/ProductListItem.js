import { Fab } from '@mui/material'
import React from 'react'
import { Row, Container, Card } from 'react-bootstrap'
const ProductListItem = (props) => {
  return (
    <div>
        <Container>
        <Card className='mt-4 shadow-lg border-0'>
            <Row>
                <div className='cart_img_container col-1'>
                <img className='m-3' src={props.thumbnail} alt={props.title} height={50}/>
                </div>
                <div className='col-2 d-flex align-self-center justify-content-center'><h6>{props.title}</h6></div>
                <div className='col-2 d-flex align-self-center justify-content-center'>
                <h6 className='Rating_block'>Rating : 
                <span className='rating_value'>{props.rating}</span>
                    <i className="fa fa-star star_rating"></i></h6>
                </div>
                <div className='col-2 d-flex align-self-center justify-content-center'>
                    <h6 className=''>price : $</h6><span className='mx-3 rating_value'>{props.price}</span>
                </div>
                <div className='col-5 d-flex align-self-center justify-content-center'>
                    <Fab size="small" color="extended" aria-label="add" className="mx-2" onClick={props.incrementItem}>
                        <h5 className='mb-0'>+</h5>
                    </Fab>
                    <h6 className='m-0 pt-2 px-3'>Quantity {props.count}</h6>
                    <Fab size="small" color="extended" aria-label="remove" className="mx-2" onClick={props.decrementItem}>
                        <h5 className='mb-0'>-</h5>
                    </Fab>
                    <div className='d-flex'>
                    <h6 className='m-0 pt-2 px-3'>To remove :</h6>
                    <Fab size="small" color="error" aria-label="remove" className="mx-2" onClick={props.removeItem}>
                        <h5 className='mb-0'>
                        <i class='fas fa-archive'></i>
                        </h5>
                    </Fab>
                    </div>  
                </div>
            </Row>
        </Card>
        </Container>
    </div>
  )
}

export default ProductListItem
