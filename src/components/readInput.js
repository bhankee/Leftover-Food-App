import React from 'react';


class ReadInput extends React.Component{
    constructor(props) {
      super(props);
      this.handleInput = this.handleInput.bind(this);

  }
    handleInput(e) {
        let userInput = e.target.value;
        this.props.onChange(userInput);
    }
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
  }

export default ReadInput;
