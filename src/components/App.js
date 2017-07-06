import React from 'react';
import Input from'./Input';
import recipes from'../data.json';

class App extends React.Component{
    constructor(props) {
        super();

    }
    render(){
        return(
            <div>
                <Input data={recipes} />
            </div>
        )
    }
}

export default App;
