import React from 'react';
import Input from'./Input';
import recipes from'../data';
import Header from './header'

class App extends React.Component{
    constructor(props) {
        super();

    }
    render(){
        return(
            <div>
                <Header />
                <Input data={recipes} />
            </div>
        )
    }
}

export default App;
