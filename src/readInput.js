var React = require('react');
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
    return(
    <div className='inputBox'>
        <input
        type='text'
        placeholder='Chicken'
        onChange={this.handleInput}
        />
    </div>
)
  }

  })





module.exports = ReadInput;
