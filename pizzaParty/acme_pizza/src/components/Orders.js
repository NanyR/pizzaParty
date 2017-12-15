import React, {Component} from 'react'
import axios from 'axios'


export default class Orders extends Component{

  render(){
    const ordersList= this.props.orders.map((order)=>{
      return <ul>{order.customer}
                {order.orderList.map((item)=>{
                  return <li>{item.qty} | {item.size} | {item.kind} </li>
                }

                )}
            </ul>
    }

    )
    return(
        <div>
          {ordersList}
        </div>
    )
  }

}
