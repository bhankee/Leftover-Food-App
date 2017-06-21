var recipes = require('./data');
var React = require('react');
var ReadInput = require ('./readInput');

 var Input = React.createClass({

     getInitialState:function(){
         return{
             userInput:'',
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

    createMenu() {
        this.props.recipes.map((recipe) => {
            return (
                <li key={recipe.id}>{recipe.dish}</li>
            )
        })
    },



    render(){

            console.log( this.props.recipes);
            console.log( this.createMenu);
        return(

            <div>
                <ReadInput
                    name={this.state.value}
                    onChange={this.handleName} />
                <button onClick={this.handleName}>Click</button>
                <h1>{this.state.value}</h1>
                <ul> {this.createMenu}</ul>

            </div>

        )
    }
    /*Input.propTypes = {
         userInput: PropTypes.string,
         name: PropTypes.string
     }*/

})


export default Input;
