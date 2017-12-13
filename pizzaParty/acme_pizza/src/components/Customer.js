import React, {Component} from 'react';



export default class Customer extends Component{
  constructor(props){
    super(props)
    this.state={
      phone:'',
      name:''
    }
    this.handleInput=this.handleInput.bind(this)
  }

  handleInput=()=>{

  }

  render(){
    return(
      <div className='newCustomer'>
        <h2>New Customer</h2>
        <form>
          <label for="phone">Phone Number</label>
            <input type="text" name="phone" value={this.state.phone} onchange={this.handleInput}/>
          <label for="name">Name</label>
          <input type="text" name="name" value={this.state.name} onchange={this.handleInput}/>

        </form>
      </div>
    )
  }

}
