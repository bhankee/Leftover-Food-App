import React from 'react';


var ReadInput = React.createClass ({
    getInitialState:function(){
        return{
            userInput:'',
            name: ''
        }
    },


    handleInput(e){
        let userInput=e.target.value;
        this.props.onChange(userInput);
    },




  render() {
      const {dish, ingredients} = this.props


    return(
    <div className='inputBox'>
        <input
        type='text'
        placeholder='Chicken'
        onChange={this.handleInput}
        />
    </div>
)
  },



  })





export default ReadInput;
