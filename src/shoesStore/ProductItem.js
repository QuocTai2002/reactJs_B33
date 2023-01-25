import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {image, name, price } = this.props.item;
    return (
      <div style={{ border: "1px solid  black" }} className="rounded-4 pb-3">
        <img src={image} alt='' style={{ width: "100%" }} />
        <h4>{name}</h4>
        <h5>Giá: {price}$</h5>
        <button 
        onClick={() =>{this.props.setSelectedProduct(this.props.item)}} 
        className='btn btn-dark' 
        style={{ marginRight: 10  }} 
        data-bs-toggle="modal" data-bs-target="#shoeShop"
        >xem chi tiết</button>
        <button 
        onClick={()=>{
          this.props.addToCart(this.props.item);
        }}
        className='btn btn-success'
         >Thêm vào giỏ hàng</button>
        
      </div>
    )
  }
}
