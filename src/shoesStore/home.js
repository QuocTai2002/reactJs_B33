import React, { Component } from "react";
import ProductList from "./ProductList";
import Detail from "./detail";
import Cart from "./cart";
import Swal from "sweetalert2"

export default class home extends Component {

  Product = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 10,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    selectedProduct: "",
    cart: [],
    numberCart: 0,
  };
  ///số lượng sản phẩm trong giỏ hàng 
  quantityCart = () =>{
   const numberCart = this.state.cart.length
   this.setState({
    numberCart: numberCart
   });
  }
  setSelectedProduct = (val) => {
    //tạo biến hứng dữ liệu
    this.setState({
      selectedProduct: val,
    });
  };
  //thêm sản phẩm vào giỏ hàng
  addToCart = (item) => {
    const cartItem = {
      product: item,
      quantity: 1,
    };
   
    const cloneCart = [...this.state.cart];
    const foundItem = this.state.cart.find((cartItem) => {
      return cartItem.product.id === item.id;
    });
    if (foundItem) {
      // tăng số lượng sản phẩm;
      foundItem.quantity += 1;
      Swal.fire({
        position: 'end',
        icon: 'success',
        title: 'Đã tăng số lượng sản phẩm',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      // thêm item mới vào giỏ hàng
      cloneCart.push(cartItem);
      Swal.fire({
        position: 'end',
        icon: 'success',
        title: 'Đã thêm vào giỏ hàng',
        showConfirmButton: false,
        timer: 1500
      })
    }
    this.setState(
      {
        cart: cloneCart,
      },()=>{
        this.quantityCart ();
      }
    );
    
  };
  //xóa sản phẩm
  deleteCartItem =(id)=>{
    const cloneCart = [...this.state.cart];
    const index = cloneCart.findIndex((cartItem)=>{
      return cartItem.product.id === id;
    });
    if(index === -1) return;
    cloneCart.splice(index,1);
    this.setState({
      cart: cloneCart
    },()=>{
      this.quantityCart();
    });
  }
  //thanh toán
  checkOut=()=>{
    this.setState({
      cart: []
    },()=>{
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Thanh Toán Thành Công',
        showConfirmButton: false,
        timer: 1000
      })
      this.quantityCart();
  })
}
//tăng số lượng sản phẩm 
incQuantity = (id) => {
  const cloneCart = [...this.state.cart];
  const index = cloneCart.findIndex((cartItem)=>{
    return cartItem.product.id === id;
  }) ;
  const quantity = cloneCart[index].quantity
  const quantityProduct = cloneCart[index].product.quantity;
  if (quantityProduct === quantity ) {
    Swal.fire({
      position: 'end',
      icon: 'warning',
      title: 'Số lượng sản phẩm trong kho đã hết',
      showConfirmButton: false,
      timer: 1200
    })
    return;
  } ;// nếu quá số lượng trong kho thì không thể tăng sản phẩm 
  cloneCart[index].quantity += 1;
  this.setState({
    cart: cloneCart,
  });  
}
/// giảm số lượng sản phẩm
decQuantity = (id) =>{
  const cloneCart = [...this.state.cart];
  const index = cloneCart.findIndex((cartItem)=>{
    return cartItem.product.id === id;
  }) ;
  var quantity = cloneCart[index].quantity;
  if (quantity === 1) {
    Swal.fire({
      position: 'end',
      icon: 'warning',
      title: 'không thể giảm số lượng sản phẩm về 0',
      showConfirmButton: false,
      timer: 1200
    })
    return;
  }
  cloneCart[index].quantity -= 1;
  this.setState({
    cart: cloneCart,
  });
}
  render() {
    return (
      <div className="container">
        <h2 className="text-center"> Shoes shop</h2>
        <button
          data-bs-toggle="modal"
          data-bs-target="#cartProduct"
          className="btn btn-success"
          style={{ marginBottom: 10 }}
        >
        
          <i className="fa fa-cart-plus" style={{ marginRight: 10 }}></i>
          Giỏ hàng ({this.state.numberCart})
        </button>
        <ProductList
          addToCart={this.addToCart}
          Product={this.Product}
          setSelectedProduct={this.setSelectedProduct}
        />
        <Detail selectedProduct={this.state.selectedProduct} />
        <Cart 
        cart = {this.state.cart} 
        deleteCartItem = {this.deleteCartItem} 
        checkOut = {this.checkOut} 
        incQuantity = {this.incQuantity}
        decQuantity = {this.decQuantity}
        />
      </div>
      
    );
  }
}
