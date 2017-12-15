import React, {Component} from 'react'
import Pizzas from './Pizzas'

export default class PizzaForm extends Component{
  constructor(props){
    super(props)
    this.state={
      qty:'',
      selectedSizeOption:'small',
      selectedPizzaOption: 'Cheese',
      error:false
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleSizeChange=this.handleSizeChange.bind(this)
    this.handlePizzaChange=this.handlePizzaChange.bind(this)
  }

  handleInput=(e)=>{
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [e.target.name]: value
    })
  }

  handleSizeChange=(e)=>{
    this.setState({
      selectedSizeOption:e.target.value
    })
  }

  handlePizzaChange=(e)=>{
    this.setState({
      selectedPizzaOption:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    if(!this.state.qty){
      this.setState({
        error:true
      })
    }else{
      this.setState({
        error:false
      })
        this.props.updateOrderList({qty:this.state.qty, kind: this.state.selectedPizzaOption, size: this.state.selectedSizeOption})
    }

  }

  render(){
    const sizes=this.props.sizes.map((size)=>{
      return        <label for={size}>
                      <input type="radio" value={size}
                        checked={this.state.selectedSizeOption === size}
                        onChange={this.handleSizeChange} />
                        {size}
                        </label>

    })
    const pizzas=this.props.menu.map((pizza)=>{
      return       <label for={pizza}>
                    <input type="radio" value={pizza}
                      checked={this.state.selectedPizzaOption === pizza}
                      onChange={this.handlePizzaChange} />
                      {pizza}
                      </label>

    })
    return(
      <div>
        {this.props.menu.length > 0 ? <Pizzas pizzas={this.props.orderList} /> : null}
        <br/>
        {this.state.error ? <div >Quantity is required</div> : null}
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div id="sizes-list">
          {sizes}
          </div>
          <div id="pizzas-list" >
            {pizzas}
            </div>
          <label>Qty</label>
          <input type="text" name="qty" value={this.state.qty} onChange={this.handleInput}/>
          <button>Add to order</button>
        </form>
      </div>
    )
  }


}
