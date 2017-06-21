import React, { Component } from 'react';
import Input from'./Input';
import recipes from'./data';


class App extends Component{
    render(){
        return(
            <div>
                <Input data={recipes} />
            </div>
        )
    }
}

export default App;
