import React,{Component} from 'react'


export default class Pizzas extends Component{
  constructor(props){
    super(props)

  }

  render(){
    const pizzaList= this.props.pizzas.map((pizza)=>{
      return <li class="pizza">{pizza.qty} | {pizza.size} | {pizza.kind} </li>
    })
    return(
        <div id="list-container">
          {pizzaList}
        </div>
    )
  }

}
