import React, {Component} from 'react'


export default class Customer extends Component{

  constructor(){
    super(props)
    this.setState={
      currentCustomer:null
    }
  }

  handleCustomerLookup=()=>{

  }

  render(){
    return(
      <div>
      {this.state.currentCustomer ? <div class="current"><h4>this.state.currentCustomer.name</h4> <h3>this.state.currentCustomer.phone</h3></div> : <CustomerForm/>}
      </div>
    )
  }


}
