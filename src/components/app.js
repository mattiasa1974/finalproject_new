import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import Group from "./group"
import { calculateResult } from "./calculateresult"
import "./groupnavigationcomponent.css"
import "./group.css"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state =
    {
    table: [
      {
        group: "A",
        country: "Ryssland",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        points: "0"
      }
    ],
    games:[
      {
        matchId: 1,
        date: "14/6",
        homeTeam: "Ryssland",
        awayTeam: "Saudiarabien",
        homeScore: null,
        awayScore: null,
        group: "A"
      },
      {
        matchId: 2,
        date: "15/6",
        homeTeam: "Egypten",
        awayTeam: "Uruguay",
        homeScore: null,
        awayScore: null,
        group: "A"
      },
      {
        matchId: 3,
        date: "19/6",
        homeTeam: "Ryssland",
        awayTeam: "Egypten",
        homeScore: null,
        awayScore: null,
        group: "A"
      },
      {
        matchId: 4,
        date: "20/6",
        homeTeam: "Uruguay",
        awayTeam: "Saudiarabien",
        homeScore: null,
        awayScore: null,
        group: "A"
      },
      {
        matchId: 5,
        date: "25/6",
        homeTeam: "Uruguay",
        awayTeam: "Ryssland",
        homeScore: null,
        awayScore: null,
        group: "A"
      },
      {
        matchId: 6,
        date: "25/6",
        homeTeam: "Saudiarabien",
        awayTeam: "Egypten",
        homeScore: null,
        awayScore: null,
        group: "A"
      },
      {
        matchId: 7,
        date: "15/6",
        homeTeam: "Marocko",
        awayTeam: "Iran",
        homeScore: null,
        awayScore: null,
        group: "B"
      },
      {
        matchId: 8,
        date: "15/6",
        homeTeam: "Portugal",
        awayTeam: "Spanien",
        homeScore: null,
        awayScore: null,
        group: "B"
      },
      {
        matchId: 9,
        date: "20/6",
        homeTeam: "Portugal",
        awayTeam: "Marocko",
        homeScore: null,
        awayScore: null,
        group: "B"
      },
      {
        matchId: 10,
        date: "20/6",
        homeTeam: "Iran",
        awayTeam: "Spanien",
        homeScore: null,
        awayScore: null,
        group: "B"
      },
      {
        matchId: 11,
        date: "25/6",
        homeTeam: "Iran",
        awayTeam: "Portugal",
        homeScore: null,
        awayScore: null,
        group: "B"
      },
      {
        matchId: 12,
        date: "25/6",
        homeTeam: "Spanien",
        awayTeam: "Marocko",
        homeScore: null,
        awayScore: null,
        group: "B"
      },
      {
      matchId: 13,
      date: "16/6",
      homeTeam: "Frankrike",
      awayTeam: "Australien",
      homeScore: null,
      awayScore: null,
      group: "C"
    },
    {
      matchId: 19,
      date: "16/6",
      homeTeam: "Argentina",
      awayTeam: "Island",
      homeScore: null,
      awayScore: null,
      group: "D"
    },
    {
      matchId: 25,
      date: "17/6",
      homeTeam: "Costa Rica",
      awayTeam: "Serbien",
      homeScore: null,
      awayScore: null,
      group: "E"
    },
    {
      matchId: 31,
      date: "17/6",
      homeTeam: "Tyskland",
      awayTeam: "Mexiko",
      homeScore: null,
      awayScore: null,
      group: "F"
    },
    {
      matchId: 37,
      date: "18/6",
      homeTeam: "Belgien",
      awayTeam: "Panama",
      homeScore: null,
      awayScore: null,
      group: "G"
    },
    {
      matchId: 43,
      date: "19/6",
      homeTeam: "Colombia",
      awayTeam: "Japan",
      homeScore: null,
      awayScore: null,
      group: "H"
    },
    ]
  }

}

/// handleNewHomeScore = (matchId, homeTeam, homeScore) => {
//   // console.log(matchId, homeTeam, homeScore)
//   // const newHomeScore = this.state.newhomeScore
//   // this.setState({ homeScore: homeScore})
//   const games = this.state.games
//   const index = games.findIndex((game) => game.matchId === matchId)
//   games[index].homeScore = homeScore
//   this.setState({games: games})
// //
//   }

// handleNewAwayScore = (matchId, awayTeam, awayScore) => {
//   // console.log(matchId, awayTeam, awayScore)
//   const games = this.state.games
//   const index = games.findIndex((game) => game.matchId === matchId)
//   games[index].awayScore = awayScore
//   // const newAwayScore = this.state.awayScore
//   this.setState({ awayScore: awayScore})
//
//   const table = calculateResult(this.state.games)
//   this.setState({ table: table })
//   console.log(table)
// }


handleScore = (matchId, awayTeam, awayScore,
  homeTeam, homeScore) => {
  // console.log(matchId, awayTeam, awayScore)
  const games = this.state.games
  const index = games.findIndex((game) => game.matchId === matchId)
  games[index].awayScore = awayScore
  games[index].homeScore = homeScore

  // const newAwayScore = this.state.awayScore
  this.setState({ games: games })

  const table = calculateResult(this.state.games)
  console.log(table)

  const unsortedTable = table
  const sortedTable = unsortedTable.sort((a,b) => a.points < b.points);
  console.log(sortedTable);

  this.setState({ table: table })


}

// const table = calculateResult(this.state.games)

// const groupA = this.props.games.filter((game) => {
//   return game.group === "A"
// })
//
// const first = this.state.games[0]




  render() {

    const groupIdFromUrl = "C"

    return (
      <BrowserRouter>
        <div>
          <ul className="grouprow">
            <li><Link to="/A" className="groupbox">A</Link></li>
            <li><Link to="/B" className="groupbox">B</Link></li>
            <li><Link to="/C" className="groupbox">C</Link></li>
            <li><Link to="/D" className="groupbox">D</Link></li>
            <li><Link to="/E" className="groupbox">E</Link></li>
            <li><Link to="/F" className="groupbox">F</Link></li>
            <li><Link to="/G" className="groupbox">G</Link></li>
            <li><Link to="/H" className="groupbox">H</Link></li>
          </ul>

          <Route path="/:groupId"
            render={(props) => (
              <Group {...props}
              addScore = {this.handleScore}
              games={this.state.games}
              country={this.country}
              playedGames={this.playedGames}
              wins={this.wins}
              draws={this.draws}
              losts={this.losts}
              totOwnScore={this.totOwnScore}
              totAgainstScore={this.totAgainstScore}
              points={this.points}
              table={this.state.table}/>
            )}
            />
        </div>
      </BrowserRouter>

    )

  }
}

export default App

// <div>
//   { this.state.games.map((gameData) => {
//     if (gameData.group === groupIdFromUrl)
//     {
//      return (<Game
//             addHomeScore = {this.handleNewHomeScore}
//             addAwayScore = {this.handleNewAwayScore}
//             game={gameData} />)
//     console.log(gameData)
//   }
// })}
// </div>
