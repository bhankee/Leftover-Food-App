import React from 'react';


var ReadInput = React.createClass ({

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
      },
  })





export default ReadInput;
