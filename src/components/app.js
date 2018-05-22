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
        diffScore: "0",
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
    {
      matchId: 49,
      date: "30/6",
      homeTeam: "1C",
      awayTeam: "2D",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 50,
      date: "30/6",
      homeTeam: "1A",
      awayTeam: "2B",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 51,
      date: "1/7",
      homeTeam: "1B",
      awayTeam: "2A",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 52,
      date: "1/7",
      homeTeam: "1D",
      awayTeam: "2C",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 53,
      date: "2/7",
      homeTeam: "1E",
      awayTeam: "2F",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 54,
      date: "2/7",
      homeTeam: "1G",
      awayTeam: "2H",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 55,
      date: "3/7",
      homeTeam: "1F",
      awayTeam: "2E",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    },
    {
      matchId: 56,
      date: "3/7",
      homeTeam: "1H",
      awayTeam: "2G",
      homeScore: null,
      awayScore: null,
      group: "1_8"
    }
    ]
  }

}




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
  //console.log(table)

  const unsortedTable = table
  const sortedTable = unsortedTable.sort((a,b) => (a.diffScore < b.diffScore) || (a.points < b.points)  );
  //console.log(sortedTable)

  this.setState({ table: sortedTable })

  let groups = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: []
  }

  // console.log('table: ',table)

  table.forEach(country => {
    console.log('group: ', groups[country.group])
    groups[country.group].push(country)
   }
  )


  // groups = [A:[], B:[]]


  // [A, B]
  Object.keys(groups).forEach(key => {

   const unsorted = groups[key]
   const sorted = unsorted.sort((a,b) => (a.diffScore < b.diffScore) || (a.points < b.points))
   groups[key] = sorted
   // console.log(groups[key])
   // const sortedTables =   )
   console.log(sorted)

  
      console.log(groups.A[0].country)







  })

}



  render() {

    const groupIdFromUrl = "C"

    return (
      <div>
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
              diffScore={this.diffScore}
              points={this.points}
              table={this.state.table}/>
            )}
            />
        </div>
      </BrowserRouter>
        <div>
          <h1>hej</h1>
        </div>
      </div>

    )

  }
}

export default App
