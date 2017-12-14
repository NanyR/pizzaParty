import React, {Component} from 'react';
import axios from 'axios'

export default class CustomerForm extends Component{
  constructor(props){
    super(props)
    this.state={
      phone:'',
      name:'',
      failed:false
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleInput=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    debugger
    axios({
			method: 'POST',
			url: 'http://localhost:3001/customers',
			data: {name: this.state.name, phone: this.state.phone}
		}).then(resp => {
				console.log(resp)
			}).catch((error) => {
			this.setState({
				failed: true
			});
		})
  }

  render(){
      const error= this.state.failed ? <p className="error-new-customer">Sorry; this user could not be added at this time</p> : null
    return(
      <div className='newCustomer'>
        <h2>New Customer</h2>
          {error}
        <form onSubmit={this.handleSubmit}>
          <label for="phone">Phone Number</label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput}/>
          <label for="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
          <button>Add new Customer</button>
        </form>
      </div>
    )
  }

}
