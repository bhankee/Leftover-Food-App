

import React from 'react';
import ReadInput from './readInput';
import {inputFood} from './getRecipe';
import allReducers from './reducerIndex';
import {bindActionCreators} from 'redux';



class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            name: ''

        };


        this.handleName = this.handleName.bind(this);
    }



    handleName(e){

        if(e === 'beef'){
                this.setState({name: 'Brad'})
            } else {
                this.setState({name: 'Dont Know'})
            }
    }

    createMenu() {
        return this.props.recipe.map((recipe) => {
            return (
                <li key={recipe.id}>{recipe.dish}</li>
            )
        })
    }

    render(){

            console.log(this.props.recipe);
            console.log('menu' + this.createMenu);
        return(

            <div>
                <ReadInput
                    name={this.state.name}
                    onChange={this.handleName} />
                <button onClick={this.handleName}>Click</button>
                <h1>{this.state.name}</h1>
                <ul> {this.createMenu}</ul>

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


export default Input;
