import React, {Component} from 'react'


export default class PizzaForm extends Component{

  render(){
    const sizes=this.props.sizes.map((size)=>{
      return       <div> <label for={size}>{size}</label>
                    <input
                      id={size}
                      name={size}
                      type="checkbox"
                      checked={this.props.handleChecked}
                      onChange={this.props.handleInput}
                      value={size}
                      />
                        </div>
    })
    const pizzas=this.props.pizzas.map((pizza)=>{
      return       <div><label for={pizza.toLowerCase()}>{pizza}</label>
                    <input
                      id={pizza.toLowerCase()}
                      name={pizza.toLowerCase()}
                      type="checkbox"
                      checked={this.props.handleChecked}
                      onChange={this.props.handleInput}
                      value={pizza.toLowerCase()}
                      />
                        </div>
    })
    return(
      <div>
        {sizes}
        {pizzas}
      </div>
    )
  }


}
