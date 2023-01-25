import React, { Component } from 'react'

export default class demo extends Component {
    showMessage(){
        alert ("Hello");
    }
    showMessage2 (n){
        alert(n)
    };

  render() {
    return (
     <div>
        <button onClick={this.showMessage}>show</button>
        <button onClick={()=>this.showMessage2("xin chao")}>show2</button>
     </div>

      
    )
  }
}
