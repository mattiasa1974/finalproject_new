import React from "react"
import Game from "./game"


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
        <div>
          { this.props.table.map((tableData) => {
            if (tableData.group === this.props.match.params.groupId)
            {
             return (
                    <div>
                      <div>{tableData.country}</div>
                      <div>{tableData.playedGames}</div>
                      <div>{tableData.wins}</div>
                      <div>{tableData.draws}</div>
                      <div>{tableData.losts}</div>
                      <div>{tableData.totOwnScore}</div>
                      <div>–</div>
                      <div>{tableData.totAgainstScore}</div>
                      <div>{tableData.points}</div>
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
