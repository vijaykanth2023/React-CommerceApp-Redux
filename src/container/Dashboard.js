import React from 'react'
import { ProductList } from '../data/ProductList'
import {Container} from 'react-bootstrap';
import ProductCard from '../component/ProductCard'

const Dashboard = () => {
  return (
    <div className='wrapper'>
      <Container className="my-5">
      <div className='d-flex flex-wrap justify-content-center'>
        {ProductList.map((product) => 
          <ProductCard {...product} key={product.id} />
        ) }
      </div>
      </Container>
    </div>
  )
}

export default Dashboard
