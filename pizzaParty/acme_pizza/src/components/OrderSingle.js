import React, {Component} from 'react'


export default class OrderSingle extends Component {
  constructor(props){
    super(props)

  }

  getPizzasDetails=(pizzasArr)=>{
      const details= pizzasArr.map((pizza)=>{
          return (
            <div className="pizza">
              <li>{pizza.qty}</li>
              <li>{pizza.size}</li>
              <li>{pizza.kind}</li>
            </div>
          )
      })
      return details

  }



  render(){
    return(

      <div className="order-container">
            <h3>Order # {this.props.id}</h3>
            {this.props.desc ? this.getPizzasDetails(this.props.desc) : null}

            <h4>{this.props.ready ? 'Order processed and completed' : 'Order pending'}</h4>
      </div>
    )
  }
}
