import React from "react"
import Game from "./game"

class Group extends React.Component {

  render() {

    return (
      <div>
        <p>hej</p>
        <p>{this.props.gamesA}</p>


      </div>
    )

  }
}

export default Group
// { this.props.groupmatches.map(groupA =>  <Game game={this.props.games} />) }
// { this.props.gamesA.map(matchA =>  <Game group={group} />) }
