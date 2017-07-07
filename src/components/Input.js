import React from 'react';
import ReadInput from'./readInput';
import '../Styles/Home.css';

 class Input extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             value:''
         }
         this.handleName = this.handleName.bind(this);
     };

    handleName(e){
        console.log('handleName')
        if(e === 'chicken'){
                this.setState({value: 1})
            } else if (e == 'beef') {
                this.setState({value: 2})
            } else if (e === 'fish'){
                this.setState({value: 3})
            }

    }


    render(){
        const menu = this.props.data.filter((recipe) => {
                if(recipe.id === this.state.value){
                return recipe.dish;
            }
        })
        .map(recipe => {
            return(
                <div>
                    <img src={recipe.picture} className="foodPic"></img>
                    <li key={recipe.id} className="recipe">{recipe.dish}</li>
                    <li >{recipe.ingredients}</li>
                    <p >{recipe.process}</p>

                </div>
            )
        })

        return(
            <div>
                <ReadInput
                    onChange={this.handleName} />
                <ul className='listStyle'>
                    {menu}
                </ul>
            </div>
        )
    }
}

export default Input;
