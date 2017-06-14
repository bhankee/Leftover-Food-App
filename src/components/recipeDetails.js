import React, {Component} from 'react';
import {connect} from 'react-redux';

class recipeDetails extends Component {
    render (){
        if(!this.props.recipe){
            return(<h2>Type in a food</h2>);
        }
        return (
            <div>
            <h1>{this.props.recipe.dish}</h1>

            </div>
        );
    }

}


function mapStateToProps(state){
    return{
        recipe: state.activeRecipe
    };

}

export default connect(mapStateToProps)(recipeDetails);
