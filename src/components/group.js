import React from "react"
import Game from "./game"
import "./group.css"


class Group extends React.Component {

  render() {
// console.log(this.props)
    return (
      <div>
        <div>
          { this.props.games.map((gameData) => {
            if (gameData.group === this.props.match.params.groupId)
            {
             return (<Game
                    addScore = {this.props.addScore}
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
        <div className="table-container">
          { this.props.table.map((tableData) => {
            console.log(tableData.group)
            if (tableData.group === this.props.match.params.groupId)
            {
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
                      <div className="table-item">{tableData.group}</div> 
                    </div>
                  )
                    // country={this.props.country}
                    // playedGames={this.props.playedGames}
                    // wins={this.props.wins}
                    // draws={this.props.draws}
                    // losts={this.props.losts}
                    // totOwnScore={this.props.totOwnScore}
                    // totAgainstScore={this.props.totAgainstScore}
                    // points={this.props.points})
          }
        })}
        </div>
      </div>
    )

  }
}

export default Group
// { this.props.groupmatches.map(groupA =>  <Game game={this.props.games} />) }
// { this.props.gamesA.map(matchA =>  <Game group={group} />) }
