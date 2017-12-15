import React, {Component} from 'react'


export default class OrderForm extends Component{

  constructor(props){
    super(props)
    this.state={
      pickUp:'',
      error:false
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
    if(this.state.pickUp){
      this.props.updatePickUp(this.state.pickUp)
    } else{
      this.setState({
        error: true
      })
    }
  }

  render(){
    const error= <div>Please enter in a valid pickup time to continue</div>
    return(
      <div>
        {this.props.pickupTime ? <div id="pickup-time">Pick up time: {this.props.pickupTime}</div> :
        <div>
        {this.state.error ? error : null}
          <form onSubmit={this.handleSubmit}>
            <label>Pickup Time</label>
              <input type='text' name="pickUp" value={this.state.pickUp} onChange={this.handleInput}/>
              <button>Next</button>
          </form>
        </div>
      }
      </div>
    )
  }

}
