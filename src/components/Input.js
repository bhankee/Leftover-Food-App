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
       if(e.toLowerCase() === 'chicken'){
               this.setState({value: 1})
           } else if (e.toLowerCase() === 'beef') {
               this.setState({value: 2})
           } else if (e.toLowerCase() === 'fish'){
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
                   <li className="recipeMed" >{recipe.ingredients}</li>
                   <p className="recipeMed">{recipe.process}</p>
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
