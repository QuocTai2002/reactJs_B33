import React, { Component } from 'react'
import ProductItem from './ProductItem'
// import Detail from './detail'
export default class ProductList extends Component {
  renderProducts= ()=> {  
      return this.props.Product.map((item) => {
        return ( 
        <div className='col' key={item.id}>
        <ProductItem
        addToCart = {this.props.addToCart}
        setSelectedProduct ={this.props.setSelectedProduct}
        item = {item} />
        </div>
        );
      });
  }

  render() {
    return (
      <div className='row row-cols-3 row-cols-lg-4 g-2 g-lg-3 text-center'>
       {this.renderProducts()};
       {/* <Detail /> */}
      </div>

    )
  }
}
