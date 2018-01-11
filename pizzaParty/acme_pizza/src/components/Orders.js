import React, {Component} from 'react'
import axios from 'axios'
import OrdersList from './OrdersList'

export default class Orders extends Component{

  constructor(props){
    super(props)
    this.state={
      orders: [],
      failed:false
    }
  }

  componentWillMount(){
    axios({
      method: 'GET',
      url: 'http://localhost:3001/orders'
    }).then(resp => {
        this.setState({
          orders: resp.data,
          failed:false
        })
      }).catch((error) => {
      this.setState({
        failed: true
      });
    })
  }

  render(){
    return(
        <div>
          <OrdersList orders={this.state.orders} failed={this.state.failed}/>
        </div>
    )
  }

}
