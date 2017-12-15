import React, {Component} from 'react';
import axios from 'axios'

export default class CustomerForm extends Component{
  constructor(props){
    super(props)
    this.state={
      nameInput:'',
      phoneInput:''
    }
    this.handleInput=this.handleInput.bind(this)
  }

  handleInput=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.createCustomer({name:this.state.nameInput, phone:this.state.phoneInput})
  }

  findCustomer=(e)=>{
    e.preventDefault()
    this.props.findCustomer({phone: this.state.phoneInput})
  }

  render(){

    return(
      <div>
      <h3>Customer Info:</h3>
      {this.props.customer ? <div id="customerInfo"><h4>{this.props.customer.name}</h4><h3>{this.props.customer.phone}</h3></div> :
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for="phone">Phone Number</label>
                <input type="text" name="phoneInput" value={this.state.phoneInput} onChange={this.handleInput}/>
              <label for="name">Name</label>
              <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleInput}/>
              <button>Add new Customer</button>
              <button onClick={this.findCustomer}>Find Customer</button>
            </form>
          </div>
        }
      </div>

    )
  }

}
