import React, { Component } from 'react'

export default class cart extends Component {
renderCart = () =>{//hiện giỏ hàng
return this.props.cart.map((item, index) => {
  const {image,name,price,id} = item.product;
  const {quantity}=item;
  return (
    <tr key={id}>
    <th scope="row">{index}</th>
    <td><img src={image} alt="#" style={{width:150}}/></td>
    <td>{name}</td>
    <td>
    <button
    onClick={()=>{this.props.decQuantity(id)}}
    className='btn btn-light' ><i className="fa fa-angle-left"></i></button>
      <span>{quantity}</span>
      <button 
      onClick={()=>{this.props.incQuantity(id)}}
      className='btn btn-light'><i className="fa fa-angle-right"></i></button>
      </td>
    <td>{price} $</td>  
    <td> 
      {price*quantity} $</td>
    <td>
    <button 
    onClick={()=>{
      this.props.deleteCartItem(id)
    }}
    className='btn btn-danger'>Xóa</button>
    </td>
    
  </tr>
  )
});
}  

total = () => {
  return this.props.cart.reduce((preVal,currentItem) => {
    return preVal + currentItem.quantity* currentItem.product.price;
  },0)
}
  render() { 
    return (
      <div>
        {/* <!-- Modal --> */}
<div className="modal fade " id="cartProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Giỏ hàng</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <table className='table'>
        <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">
        HÌnh ảnh
      </th>
      <th scope="col">Tên SP</th>
      <th scope="col">Số Lượng</th>
      <th scope="col">Đơn Giá</th>
      <th scope="col">Thành Tiền</th>
      <th scope="col">
        
      </th>
    </tr>
  </thead>
  <tbody>
  {this.renderCart()}
  </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
        <button 
        data-bs-dismiss="modal"
        onClick={()=>this.props.checkOut()}
        type="button" className="btn btn-primary">Thanh Toán</button>
        <h2>Tổng: {this.total()} $</h2>
      </div></div></div></div>

      </div>
    )
  }
}
