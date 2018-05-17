import React from "react"
import Game from "./game"

class Group extends React.Component {

  render() {
console.log(this.props)
    return (
      <div>
        { this.props.games.map((gameData) => {
          if (gameData.group === this.props.match.params.groupId)
          {
           return (<Game
                  addHomeScore = {this.props.addHomeScore}
                  addAwayScore = {this.props.addAwayScore}
                  game={gameData}
                  country={this.props.country}
                  playedGames={this.props.playedGames}
                  wins={this.props.wins}
                  draws={this.props.draws}
                  losts={this.props.losts}
                  totOwnScore={this.props.totOwnScore}
                  totAgainstScore={this.props.totAgainstScore}
                  points={this.props.points} />)
        }
      })}
      </div>
    )

  }
}

export default Group
// { this.props.groupmatches.map(groupA =>  <Game game={this.props.games} />) }
// { this.props.gamesA.map(matchA =>  <Game group={group} />) }
