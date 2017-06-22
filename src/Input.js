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
        if(e === 'chicken'){
                this.setState({value: 1})
            } else if (e === 'beef') {
                this.setState({value: 2})
            } else if (e === 'rice'){
                this.setState({value: 3})
            }

    },

    render(){
        console.log(this.props.data);
        const recipes = this.props.data;

        const menu = recipes
        .filter(recipe => {
            if(recipe.id == this.state.value){
            return recipe.dish ;
        }

        })
        .map(recipe => {


            return(
                <div>
                <li key={recipe.id}>{recipe.dish}</li>
                <li >{recipe.ingredients}</li>
                </div>
            )
        })
        return(
            <div>
                <ReadInput
                    onChange={this.handleName} />
                <button onClick={this.menu}>Click</button>
                <h1>{this.state.value}</h1>
                <ul>
                    {menu}
                </ul>
            </div>
        )
    }
})


export default Input;
