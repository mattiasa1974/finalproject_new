import React from "react"
import Game from "./game"

class Group extends React.Component {

  render() {

    return (
      <div>
        <p>hello world</p>
        <p>{this.props.groupmatches.group}</p>

      </div>
    )

  }
}

export default Group
// { this.props.groupmatches.map(groupA =>  <Game game={this.props.games} />) }
// { this.props.gamesA.map(matchA =>  <Game group={group} />) }
