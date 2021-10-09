import React from 'react'
import Select from 'react-select'
import Createable from 'react-select/creatable'

import axios from 'axios'




class CreateInns extends React.Component{
    constructor(){
        super()
            this.state = {
                selectedTeams: {}
    
            } 
    



        this.homePlayers = React.createRef()
    }




    handleTeamSelect = (side, opt) => {
        //* 1. Set the selected team for home or Away (and overwrite the previous one)
        const selectedTeams = {...this.state.selectedTeams, [side]: opt}

        //* 2. Remove the selectedTeams from the teamsList array and reset team options from full team list
        const teamOptions = this.state.teams.filter(team => !Object.values(selectedTeams).includes(team))

        //* 3 Set the players for that team as selectable


        //* 4. Set them instate
        this.setState({ teamOptions, selectedTeams })
    }





    componentDidMount(){
        axios.get('http://localhost:5000/teams')
        .then(res => {
            const optionsData = res.data.map(team => {
                team['label'] = team.name,
                team['value'] = team._id
                team.players.map(player => {
                    player['label'] = player.name,
                    player['value'] = player._id
                    return player
                })
                return team
    
            })
            this.setState({ teamOptions: optionsData, teams: optionsData })
        })
        .catch(err => console.log(err.message))
    }



    render(){
        const eleven = Array.from(Array(11).keys())
        console.log(this.homePlayers)

        return (
            <div className="CreateInns FullPage">
                <header>
                    <h1>SCOREBOOK</h1>
                    <h2 className="header_title">Create Innings</h2>
                </header>
                <div className="wrapper">
                    <div className="team">
                        <div className="teamHeader fcc">
                            <h2>HOME</h2>

                        </div>
                        <Select
                            name="home"
                            options={this.state.teamOptions}
                            onChange={(e) => this.handleTeamSelect('home', e)} 
                            placeholder="Select team"   
                        >
                        </Select>
                        <div className="playerSelect">
               
                            {eleven.map((row, i) => 
                                <div className="playerRow">
                                    <div className="">
                                        <p>{`${i + 1}.`}</p>

                                    </div>
                                    <Createable
                                        ref={this.homePlayers}
                                        options={this.state.selectedTeams.home ? this.state.selectedTeams.home.players : null}
                                        // value={this.state.selectedPlayers[0][i]}
                                    ></Createable>
                                    <div className="radios">
                                        <label htmlFor="">Cpt</label>
                                        <input type="radio" name="keeper" id="" />
                                        <label htmlFor="">Wk</label>
                                        <input type="radio" name="Captain" id="" />
                                    </div>
                    

                                </div>    
                            )}
                        </div>
                    </div>





                    <div className="middleData">
                        <div className="tossBatSelects">
                            <form action="">
                                <label htmlFor="">Won toss</label>
                                <input type="radio" name="toss" value="home" className="radio" />
                                <input type="radio" name="toss" value="away" className="radio" />
                                <label htmlFor="">Batting first</label>

                                <input type="radio" name="batting" value="home" className="radio" />
                                <input type="radio" name="batting" value="away" className="radio" />
                            </form>
                        </div>
                        <div className="versus fcc">
                            <h1> - V - </h1>
                        </div>
                        <div></div>
               

         
          
                      

                    </div>
                    <div className="team">
                        <div className="teamHeader fcc">
                            <h2>AWAY</h2>

                        </div>
                        <Select
                            name="away"
                            options={this.state.teamOptions}
                            onChange={(e) => this.handleTeamSelect('away', e)}
                        >

                        </Select>
                        <div className="playerSelect"></div>

                    </div>

     
    
                </div>



                {/*  WE NEED TO HAVE A PAGE HERE TO:*/}
                {/* 1. SELECT TEAMS & ADD PLAYERS TO THOSE TEAMS */}
                {/* 2. SELECT VENUE / HOME TEAM */}
                {/* 3. SELECT WHICH TEAM WINS THE TOSS */}
                {/* 3. SELECT WHICH TEAM IS BATTING AND WHICH TEAM IS BOWLING */}

            </div>

        )
    }
}


export default CreateInns