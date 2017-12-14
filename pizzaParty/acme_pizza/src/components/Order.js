import React, {Component} from 'react'
import axios from 'axios'

import PizzaForm from './PizzaForm'

export default class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      pickup_time:'',
      isChecked:false,
      pizzas: null,

      failed:false
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleInput=(e)=>{
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [e.target.name]: value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    debugger
    axios({
			method: 'POST',
			url: `http://localhost:3001/customers/${this.props.customer_id}/orders`,
			data: {pickup_time: this.state.pickup_time, pizzas:this.state.pizzas}
		}).then(resp => {
				console.log(resp)
			}).catch((error) => {
			this.setState({
				failed: true
			});
		})
  }

  render(){
      const error= this.state.failed ? <p className="error-new-customer">Sorry; we were not able to submit this order, please try again and make sure that date and time of pick up is accurate</p> : null
    return(
      <div className='new-order'>
        <h2>New Order</h2>
          {error}
        <form onSubmit={this.handleSubmit}>
          <label for="pickuptime">Pickup Time</label>
            <input type="text" name="pickuptime" value={this.state.pickup_time} onChange={this.handleInput}/>
            <PizzaForm pizzas={["Pepperoni", "Cheese", "Hawaiian", "Veggie"]} sizes={["small", "medium", "large"]}/>

          <button>Add pizza to order</button>
        </form>
      </div>
    )
  }
}
