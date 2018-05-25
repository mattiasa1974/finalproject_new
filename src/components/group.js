import React from "react"
import Game from "./game"
import "./group.css"


class Group extends React.Component {




  render() {

    const { groups, games, addScore } = this.props
    const group = groups[this.props.match.params.groupId]

    return (
      <div>
        <div>
          { games.map((gameData) => {
            if (gameData.group === this.props.match.params.groupId)
            {
             return (<Game
                    addScore = {addScore}
                    game={gameData}
                     />)
          }
        })}
        </div>
        <div className="table-headline">
          <p><span> DIN TABELL </span></p>
        </div>
        <div className="table-container">
          { group.map((tableData) => {
            // console.log(tableData.group)
            // console.log(this.props.match.params.groupId)
             return (
                    <div className="table-row">
                      <div className="table-item country">{tableData.country}</div>
                      <div className="table-item">{tableData.playedGames}</div>
                      <div className="table-item">{tableData.wins}</div>
                      <div className="table-item">{tableData.draws}</div>
                      <div className="table-item">{tableData.losts}</div>
                      <div className="table-item">{tableData.totOwnScore}</div>
                      <div>–</div>
                      <div className="table-item">{tableData.totAgainstScore}</div>
                      <div className="table-item">{tableData.points}</div>
                    </div>
                  )
        })}
        </div>
      </div>
    )

  }
}

export default Group
// { this.props.groupmatches.map(groupA =>  <Game game={this.props.games} />) }
// { this.props.gamesA.map(matchA =>  <Game group={group} />) }
