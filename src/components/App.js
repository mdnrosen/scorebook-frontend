import React from 'react'



class App extends React.Component {
    state = {
        teams: [
            'King\'s XI Punjab',
            'Chennai Super Kings',
            'Rajastan Royals',
            'Royal Challengers Bangalore',
            'Sunrisers Hyderabad',
            'Kolkatta Knight Riders',
            'Mumbai Indians',
            'Delhi Capitals'
        ]

    }
    render(){
        return(
            <div className="App">
                <h2>Welcome to SCOREBOOK</h2>
                <button>Go to inns</button>
                <p>Here are some IPL teams</p>
                {this.state.teams.map((team, i ) => 
                    <p key={i}>{team}</p>
                )}
            </div>
        )
    }
}


export default App