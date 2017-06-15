import React from 'react';
import Home from './Home';

import recipeDetails from'./recipeDetails';


class App extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <recipeDetails />
            </div>
        )
    }
}

export default App;
