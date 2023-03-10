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
  ///s??? l?????ng s???n ph???m trong gi??? h??ng 
  quantityCart = () =>{
   const numberCart = this.state.cart.length
   this.setState({
    numberCart: numberCart
   });
  }
  setSelectedProduct = (val) => {
    //t???o bi???n h???ng d??? li???u
    this.setState({
      selectedProduct: val,
    });
  };
  //th??m s???n ph???m v??o gi??? h??ng
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
      // t??ng s??? l?????ng s???n ph???m;
      foundItem.quantity += 1;
      Swal.fire({
        position: 'end',
        icon: 'success',
        title: '???? t??ng s??? l?????ng s???n ph???m',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      // th??m item m???i v??o gi??? h??ng
      cloneCart.push(cartItem);
      Swal.fire({
        position: 'end',
        icon: 'success',
        title: '???? th??m v??o gi??? h??ng',
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
  //x??a s???n ph???m
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
  //thanh to??n
  checkOut=()=>{
    this.setState({
      cart: []
    },()=>{
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Thanh To??n Th??nh C??ng',
        showConfirmButton: false,
        timer: 1000
      })
      this.quantityCart();
  })
}
//t??ng s??? l?????ng s???n ph???m 
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
      title: 'S??? l?????ng s???n ph???m trong kho ???? h???t',
      showConfirmButton: false,
      timer: 1200
    })
    return;
  } ;// n???u qu?? s??? l?????ng trong kho th?? kh??ng th??? t??ng s???n ph???m 
  cloneCart[index].quantity += 1;
  this.setState({
    cart: cloneCart,
  });  
}
/// gi???m s??? l?????ng s???n ph???m
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
      title: 'kh??ng th??? gi???m s??? l?????ng s???n ph???m v??? 0',
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
          Gi??? h??ng ({this.state.numberCart})
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
