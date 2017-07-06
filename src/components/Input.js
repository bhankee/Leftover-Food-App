import React from 'react';
import ReadInput from'./readInput';
import '../Styles/Home.css';

 class Input extends React.Component{
     constructor(props) {
         super();
         this.state = {
             value:''
         }
         this.handleName = this.handleName.bind(this);
     };
    handleName(e){
        console.log('handleName')
        if(e === 'chicken'){
                this.setState({value: 1})
            } else if (e === 'beef') {
                this.setState({value: 2})
            } else if (e === 'rice'){
                this.setState({value: 3})
            }

    }

    const recipes = this.props.data;

    const menu = recipes
        .filter(recipe => {
            if(recipe.id === this.state.value){
            return recipe.dish ;
        }else {
            return('Try Again');
        }
    })
    .map(recipe => {
        return(
            <div>
            <li key={recipe.id}>{recipe.dish}</li>
            <li >{recipe.ingredients}</li>
            </div>
        )
    })

    render(){
        return(
            <div>
                <ReadInput
                    onChange={this.handleName} />
                <button className="homeButton" onClick={this.menu}>Click</button>
                <ul className='listStyle'>
                    {this.props.menu}
                </ul>
            </div>
        )
    }
}

export default Input;
