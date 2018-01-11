import React,{Component} from 'react'
import OrderSingle from './OrderSingle'

export default class OrdersList extends Component{

  constructor(props){
    super(props)

  }



  render(){
    const orders= this.props.orders.map((order, i) =>{
      if(order.items){
        const id= order.id;
        const pickup= order.pickup_time;
        const descObj = JSON.parse(order.items);

        const ready= order.ready;
        const customer= order.customer_id;
       return <OrderSingle id={id} key={i} pickup={pickup}  desc={descObj} ready={ready} customer={customer}/>
      }

    })
    return(
      <div>
        {this.props.failed ? <div className='orders-error'>There was a problem with the server and we cannot get a list of orders at the moment, please try again later</div> : null}
        {orders}
      </div>
    )
  }

}
