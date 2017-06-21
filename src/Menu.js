var recipes = require('./data');
var React = require('react');
var ReadInput = require ('./readInput');

 var Menu = React.createClass({
     getInitialState:function(){
         return{
             food: ''
         }
     },

     createMenu() {
         this.props.recipes.map((recipe) => {
             return (
                 <li key={recipe.id}>{recipe.dish}</li>
             )
         })
     },

    render(){
        return(
            <div>
                <ul>
                    <li>{this.createMenu}</li>
                </ul>
            </div>
        )
    }
})


export default Menu;
