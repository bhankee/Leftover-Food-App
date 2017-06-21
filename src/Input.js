var recipes = require('./data');
var React = require('react');
var ReadInput = require('./readInput');


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
            this.props.recipes.map((recipe) => {
                return (
                    <ul>
                    <li key={recipe.id}>{recipe.dish}</li>
                    </ul>
                )
            })
    },


    render(){
        return(
            <div>
                <ReadInput
                    onChange={this.handleName} />
                <button onClick={this.handleName}>Click</button>
                <h1>{this.state.value}</h1>
            </div>

        )
    }
    /*Input.propTypes = {
         userInput: PropTypes.string,
         name: PropTypes.string
     }*/

})


export default Input;
