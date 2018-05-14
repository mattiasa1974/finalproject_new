import React from "react"
import GroupNavigationscontainer from "./groupnavigationcontainer"
import Gametable from "./gametable"




class Maincontainer extends React.Component {

  constructor(props) {
    super(props)

  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  render() {
    // get all groups from this.props.games
    const groups = this.props.games.map(game => game.group);
    const uniqueGroups = groups.filter( this.onlyUnique )

    // get all games from group A


    const teamHome = this.props.games.map(game => game.homeTeam)

    const teamAway = this.props.games.map(game => game.awayTeam)


    // const homeTeams = matches.filter( homeTeams )

    return (
      <div>
        <div>Maincontainer</div>
        <pre>{ JSON.stringify(this.props.games, undefined, 2) }</pre>

        // send all groups as prop
        <GroupNavigationscontainer games={this.props.games} groups={uniqueGroups}/>


      </div>
    )
  }
}

export default Maincontainer
