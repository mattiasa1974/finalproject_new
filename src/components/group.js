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
                  game={gameData} />)
        }
      })}
      </div>
    )

  }
}

export default Group
// { this.props.groupmatches.map(groupA =>  <Game game={this.props.games} />) }
// { this.props.gamesA.map(matchA =>  <Game group={group} />) }
