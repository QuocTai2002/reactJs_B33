import React, { Component } from 'react'

export default class detail extends Component {
  render() {
    const {name,image,quantity,price, description} = this.props.selectedProduct;
    return (
      <div>
        {/* <!-- Modal --> */}
<div className="modal fade text-center" id="shoeShop" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <img src={image} alt='' style={{ width: 300 }} />
        <h4 className='text-start'> Tên: {name}</h4>
        <h4 className='text-start'>Giá: {price}$</h4>
        <h4 className='text-start'>Mô tả: {description}</h4>
        <h4 className='text-start' style={{color:"red"}}>Số lượng: {quantity}</h4>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
      </div></div></div></div>


      </div>

    )
  }
}
