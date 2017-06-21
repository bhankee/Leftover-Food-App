var myData = require('./data');
var React = require('react');
var ReadInput = require ('./readInput');
 var Input = React.createClass({

     getInitialState:function(){
         return{
             userInput:'',
             name: ''
         }
     },

    handleName(e){

        if(e === 'beef'){
                this.setState({name: 'Brad'})
            } else {
                this.setState({name: 'Dont Know'})
            }
    },

    createMenu() {
        return this.props.myData.map((myData) => {
            return (
                <li key={myData.id}>{myData.dish}</li>
            )
        })
    },

    render(){

            console.log('myData' +' ' + this.props.myData);
            console.log( this.createMenu);
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
})


export default Input;
