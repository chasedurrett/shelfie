import React, { Component } from 'react'

class Product extends Component{


    render(){
        return <div className='product-container'>
            <div>{this.props.img}</div>
            <div>{this.props.name}</div>
            <div>{this.props.price}</div>
            
        </div>
    }

}

export default Product