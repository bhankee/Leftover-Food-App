import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {inputFood} from './getRecipe';


class ReadInput extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e.target.value)
        var userInput=e.target.value;
        console.log('userInput' + ' ' +userInput)
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

function mapStateToProps(state){
    return{
        recipe: state.activeRecipe
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({inputFood: inputFood}, dispatch
    )
}

export default connect(mapStateToProps)(ReadInput);
