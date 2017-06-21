import recipes from'./data';
import React from 'react';
import ReadInput from'./readInput';


 var Input = React.createClass({

     getInitialState:function(){
         return{

             value: ''
         }
     },

    handleName(e){
        if(e === 'beef'){
                this.setState({value: 'brad'})
            } else {
                this.setState({value: 'Dont Know'})
            }

    },
    render(){
        console.log(this.props.data);
        const recipes = this.props.data;
        const menu = recipes.map(recipe => {
            console.log(recipe.dish);
            return(
                <li key={recipe.id}>{recipe.dish}</li>
            )
        })

        return(
            <div>
                <ReadInput
                    onChange={this.handleName} />
                <button onClick={this.handleName}>Click</button>
                <h1>{this.state.value}</h1>
                <ul>
                    {menu}
                </ul>
            </div>

        )
    }

})


export default Input;
