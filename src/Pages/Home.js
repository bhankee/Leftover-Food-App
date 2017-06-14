import React from 'react';



class Home extends React.Component{
    render(){

        return(
            <div className="centerHeader">
                <h1>
                I want to make my leftover
                </h1>
                <input
                className="center"
                placeholder="Chicken"
                type="text"
                />
                <h1>
                AWESOME!
                </h1>
                <button
                    className="homeButton"
                    type="submit">
                    I am hungry
                </button>
            </div>

        )
    }
}

export default Home;
