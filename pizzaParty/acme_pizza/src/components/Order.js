import React, {Component} from 'react'
import CustomerForm from './CustomerForm'
import OrderForm from './OrderForm'
import PizzaForm from './PizzaForm'
import axios from 'axios'

export default class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      customer:null,
      pickupTime:null,
      orderList:[],
      menu: ["Pepperoni", "Cheese", "Hawaiian", "Veggie"],
      pizzaSizes:["small", "medium", "large"],
      failed:false,
      orderNumber:null
    }
    this.createCustomer=this.createCustomer.bind(this)
    this.updatePickUp=this.updatePickUp.bind(this)
    this.updateOrderList=this.updateOrderList.bind(this)
    this.processOrder=this.processOrder.bind(this)
    this.findCustomer=this.findCustomer.bind(this)
  }

  createCustomer=(customerInfo)=>{
    axios({
			method: 'POST',
			url: 'http://localhost:3001/customers',
			data: customerInfo
		}).then(resp => {
        var currentCustomer= Object.assign({}, this.state.customer, resp.data )
        this.setState({
          customer: currentCustomer
        })
			}).catch((error) => {
			this.setState({
				failed: true
			});
		})
  }

  findCustomer=(customerPhone)=>{
    axios({
      method: 'GET',
      url: 'http://localhost:3001/customers',
      params: customerPhone
    }).then(resp => {
        var currentCustomer= Object.assign({}, this.state.customer, resp.data )
        this.setState({
          customer: currentCustomer
        })
      }).catch((error) => {
      this.setState({
        failed: true
      });
    })
  }

  updatePickUp=(time)=>{
    this.setState({
      pickupTime: time
    })
  }

  updateOrderList=(pizzaItem)=>{
    this.setState({
      orderList: [...this.state.orderList, pizzaItem]
    })
  }

  processOrder=(e)=>{
    e.preventDefault()
    var jsonOrderList=JSON.stringify(this.state.orderList)
    debugger
    axios({
			method: 'POST',
			url: `http://localhost:3001/customers/${this.state.customer.id}/orders`,
			data: {items: jsonOrderList, pickup_time: this.state.pickupTime, ready:false, customer_id: this.state.customer.id}
		}).then(resp => {
      debugger
        this.setState({
          orderNumber: resp.data.id,
          failed:false
        })
			}).catch((error) => {
			this.setState({
				failed: true
			});
		})
  }




  render(){
    const orderDetails=this.state.orderNumber ? <div><h2>Thank you! This order was submitted, here is the order number: {this.state.orderNumber}</h2></div> : null
    return(
    <div id="main-container">
    {this.state.failed ? <p className="error-new-customer">Sorry; there was an error with this request</p> : null}
          <div id="customer-container">
            <CustomerForm createCustomer={this.createCustomer} customer={this.state.customer} findCustomer={this.findCustomer}/>
          </div>
          {this.state.customer ?
            <div id="order-time">
            <OrderForm pickupTime={this.state.pickupTime} updatePickUp={this.updatePickUp}/>
            </div> : null }
          {this.state.pickupTime && !orderDetails ?
            <div id="order-details">
            <PizzaForm orderList={this.state.orderList} menu={this.state.menu} sizes={this.state.pizzaSizes} updateOrderList={this.updateOrderList}/>
            </div> : null }
          {this.state.orderList.length >0 && !orderDetails? <button onClick={this.processOrder}>Process Order</button> : null}
          {orderDetails}
      </div>
    )
  }

}
