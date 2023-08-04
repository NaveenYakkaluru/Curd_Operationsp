


import 'font-awesome/css/font-awesome.min.css';
import './webpage.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from "react";

import Navi from './crud';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

function Web(){
    return(
        <div>


   <nav class="navbar bg-body-tertiary">
  <div id="jaki" class="container-fluid">
  <a class="navbar-brand" href="#">
  <a href='/'>simple-ecart</a>
  
<Router>
  <i id='ccc' class="fa fa-cog" aria-hidden="true"></i>
  <i id='bbb' class="fa fa-shopping-cart" aria-hidden="true"></i>

  <a id='aaa'href='/'><Link to={"/navi"}>cart</Link></a>
  <Routes>
    <Route path='navi' element={<Navi/>}/>
  </Routes>

  </Router>

  </a>
  </div>
  </nav>


<h4 style={{textAlign:'center'}}>search products</h4>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>


<div id='hhh'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/FS/OT/IT/SELLER-103000052/e-commerce-delivery-500x500.png" />
      <Card.Body>
         Fjallraaven-foldsack No.1...
         <h5>Rs.109.95</h5>
         <button style={{backgroundColor:'yellowgreen'}}> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2021/9/OO/VD/KJ/20506059/e-commerce-men-shirt-photography-500x500.JPG"/>
      <Card.Body>
         Fjallraaven-foldsack No.1...
         <h5>Rs.109.95</h5>
         <button style={{backgroundColor:'yellowgreen'}}> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=" https://ekhadiindia.s3.ap-south-1.amazonaws.com/uploads/products/photos/9ePpq87O6wXespUZNw8wXtKwFdXteBgDwH8DkDEJ.jpg"/>
      <Card.Body>
         Fjallraaven-foldsack No.1...
         <h5>Rs.109.95</h5>
         <button style={{backgroundColor:'yellowgreen'}}> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq2rPW_F2zhay7aItxiBOwLcYs0D1hbrPIAIjoCYdNO0wDUzwYOm4qnl2PQfA_a0UxVQ&usqp=CAU"/>
      <Card.Body>
         Fjallraaven-foldsack No.1...
         <h5>Rs.109.95</h5>
         <button style={{backgroundColor:'yellowgreen'}}> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>
      </Card.Body>
    </Card>

    </div>


        </div>
    )
}
export default Web;

