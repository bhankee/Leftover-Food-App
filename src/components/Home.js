
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import recipeReducer from '../reducers/reducer-recipe';

import {inputFood} from '../actions/getRecipe';



class Home extends React.Component{

    constructor(props) {

    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    }



    handleChange(event) {
        this.setState({value: event.target.value});
        if(this.state.value === "beef"){

        }
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    createRecipeList(){

        return this.props.recipe.map((recipe)=> {



                return(
                  <div className="recipeStyle">
                    <h1>Recipe</h1>
                    <h2 key={recipe.id}>{recipe.dish}</h2>
                    <h2>{recipe.ingredients} </h2>
                  </div>
               );
        });
    }


    render(){
        return(
            <div className="centerHeader">
                <h1>
                I want to make my leftover
                </h1>
                <form onSubmit={this.handleSubmit}>
                  <input
                      className="center"
                      value={this.state.value}
                      placeholder="Chicken"
                      type="text"
                      onChange={this.handleChange}
                  />
                  <button
                      className="homeButton"
                      type="submit"
                      onClick={() =>{
                          alert('A name was submitted: ' + this.props.inputFood())
                          this.props.inputFood()}}>
                      Awesome
                  </button>
              </form>

                <div>{this.createRecipeList()}</div>
            </div>
        )
    }

}


function mapStateToProps(state){
    return{
        recipe: state.recipe
    };

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({inputFood: inputFood}, dispatch
    )

}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
