import React from "react"
import GroupNavigationscontainer from "./groupnavigationcontainer"
import Gametable from "./gametable"
import Group from "./group"




class Maincontainer extends React.Component {

  constructor(props) {
    super(props)

  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  render() {
    // get all groups from this.props.games
    const groups = this.props.games.map(game => game.group)
    const uniqueGroups = groups.filter( this.onlyUnique )

    // get all games from group A

    // const groupA = this.props.games.filter((game) => {
    //   return game.group === "A"
    // })
    // console.log(groupA)
    //
    // const first = this.state.games[0]



    return (
      <div>
        <div>Maincontainer</div>

        // send all groups as prop
        <GroupNavigationscontainer games={this.props.games} groups={uniqueGroups}/>
        <Group A={groupA} />

        <Game game={first} />



      </div>
    )
  }
}

export default Maincontainer

// <pre>{ JSON.stringify(this.props.games, undefined, 2) }</pre>
