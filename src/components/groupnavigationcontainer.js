import React from "react"
import Game from "./game"
import Groupnavigationscomponent from "./groupnavigationcomponent"


class GroupNavigationscontainer extends React.Component {

  constructor(props) {
    super(props)

  }



  render() {



    return (
      <div className="grouprow">
        <h1></h1>
        <div className="grouprow">
        { this.props.groups.map(group =>  <Groupnavigationscomponent group={group} />) }
        </div>
        <div className="grouprow">
        //filtrera ut games som tillhör en viss grupp (url)
        { this.props.games.map(game =>  <Game game={game} />) }
        </div>

      </div>
    )
  }
}

export default GroupNavigationscontainer
