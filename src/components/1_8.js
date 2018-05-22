import React from "react"

class Final18 extends React.Component {

  constructor(props) {
    super(props)

    this.state =
    {
    finalround: [
      {
        matchId: 100,
        round: "1_8",
        date: "30/6",
        homeTeam: "1C",
        awayTeam: "2D",
        homeTeamScore: null,
        awayTeamScore: null,
      },
      {
        matchId: 101,
        round: "1_8",
        date: "30/6",
        homeTeam: "1A",
        awayTeam: "2B",
        homeTeamScore: null,
        awayTeamScore: null,
      }
    ]
  }


  const sortedTables_new = sortedTables.filter(elem => elem === 0)




render() {

    return (
      <div>
        { this.props.games.map((gameData) => {
          if (gameData.group === this.props.match.params.groupId)
          {
           return
            <addScore = {this.props.addScore}/>

        }
      })}
      </div>
    )
  }

}

export default Final18


render() {
// console.log(this.props)
  return (
    <div>
      <div className="table-container">
        { this.props.table.map((tableData) => {
          console.log(tableData.group)
          console.log(this.props.match.params.groupId)
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
                    <div className="table-item">{tableData.diffScore}</div>
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





// const { callback, index } = this.props
// const callback = this.props.callback
// const callback = this.props.index
// inget innehåll på handleClick () pga inget ingångsvärde,
//jämför med saveLastClicked i app.js

// style={styleObject}


// const styleObject = {
//       backgroundColor: color,
//       fontSize: "20px",
//       color: "white"
//     }




//
//
//
//
// const sortedTeamsFinalround
//
//
//
//
//
// var result = sample.filter(elem => elem !== 2)
//
//
//
// export const calculateResult = (games) => {
//   const result = countries.map((country) => {
//     let playedGames = 0
//
//     games.map((game) => {
//       if ((game.awayScore !== null) && (game.homeScore !== null)) {
//         if (country === game.homeTeam) {
//           group = game.group
//                 losts += 1
//             }
//         }
//       }
//
//       })
//
//       return {}
//
//     })
//   console.log(xx)
//   return xx
// }
