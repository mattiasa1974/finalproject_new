import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import Group from "./group"
import { calculateResult } from "./calculateresult"
import "./groupnavigationcomponent.css"
import "./group.css"
import Final18 from "./final18"

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
        group: "A",
        time: "17.00",
        channel: "TV4"
      },
      {
        matchId: 2,
        date: "15/6",
        homeTeam: "Egypten",
        awayTeam: "Uruguay",
        homeScore: null,
        awayScore: null,
        group: "A",
        time: "14.00",
        channel: "TV4"
      },
      {
        matchId: 3,
        date: "19/6",
        homeTeam: "Ryssland",
        awayTeam: "Egypten",
        homeScore: null,
        awayScore: null,
        group: "A",
        time: "20.00",
        channel: "SVT"
      },
      {
        matchId: 4,
        date: "20/6",
        homeTeam: "Uruguay",
        awayTeam: "Saudiarabien",
        homeScore: null,
        awayScore: null,
        group: "A",
        time: "17.00",
        channel: "TV4"
      },
      {
        matchId: 5,
        date: "25/6",
        homeTeam: "Uruguay",
        awayTeam: "Ryssland",
        homeScore: null,
        awayScore: null,
        group: "A",
        time: "16.00",
        channel: "TV4"
      },
      {
        matchId: 6,
        date: "25/6",
        homeTeam: "Saudiarabien",
        awayTeam: "Egypten",
        homeScore: null,
        awayScore: null,
        group: "A",
        time: "16.00",
        channel: "TV4"
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
    ],
     groups: {
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: []
    },
    final18: [
    {
    matchId: 49,
    date: "30/6",
    homeTeamKeys: {group: "C", index: 0},
    homeTeam: "1C",
    awayTeamKeys: {group: "D", index: 1},
    awayTeam: "2D",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 50,
    date: "30/6",
    homeTeamKeys: {group: "A", index: 0},
    homeTeam: "1A",
    awayTeamKeys: {group: "B", index: 1},
    awayTeam: "2B",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 51,
    date: "1/7",
    homeTeamKeys: {group: "B", index: 0},
    homeTeam: "1B",
    awayTeamKeys: {group: "A", index: 1},
    awayTeam: "2A",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 52,
    date: "1/7",
    homeTeamKeys: {group: "D", index: 0},
    homeTeam: "1D",
    awayTeamKeys: {group: "C", index: 1},
    awayTeam: "2C",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 53,
    date: "2/7",
    homeTeamKeys: {group: "E", index: 0},
    homeTeam: "1E",
    awayTeamKeys: {group: "F", index: 1},
    awayTeam: "2F",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 54,
    date: "2/7",
    homeTeamKeys: {group: "G", index: 0},
    homeTeam: "1G",
    awayTeamKeys: {group: "H", index: 1},
    awayTeam: "2H",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 55,
    date: "3/7",
    homeTeamKeys: {group: "F", index: 0},
    homeTeam: "1F",
    awayTeamKeys: {group: "E", index: 1},
    awayTeam: "2E",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  },
  {
    matchId: 56,
    date: "3/7",
    homeTeamKeys: {group: "H", index: 0},
    homeTeam: "1H",
    awayTeamKeys: {group: "G", index: 1},
    awayTeam: "2G",
    homeScore: null,
    awayScore: null,
    group: "1_8"
  }
  ]
  }

}

handleScore18 = (matchId, awayTeam, awayScore,
  homeTeam, homeScore) => {
    const { final18 } = this.state

    const index = final18.findIndex((game18) => game18.matchId === matchId)
    final18[index].awayScore = awayScore
    final18[index].homeScore = homeScore

    this.setState({ final18: final18})

  }


handleScore = (matchId, awayTeam, awayScore,
  homeTeam, homeScore) => {
  // console.log(matchId, awayTeam, awayScore)
  const { games, groups } = this.state

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

      // console.log(groups.A[0].country)
      // let A1 = groups.A[0].country


    this.setState({groups: groups})

  })

  //Set countrynames for final 18
  const newFinal18 = this.populateCountries()
  this.setState({final18: newFinal18})



}

populateCountries = () => {
  const { groups, final18 } = this.state;
  const newFinal18 = final18.map(eight => {
    // console.log("hej", eight, eight.homeTeamKeys)
    const homeGroupLetter = eight.homeTeamKeys.group
    const homeWinnerIndex = eight.homeTeamKeys.index

    if(groups[homeGroupLetter].length >= 2 ){
      const countryObj = groups[homeGroupLetter][homeWinnerIndex]
      eight.homeTeam = countryObj.country
    }

    const awayGroupLetter = eight.awayTeamKeys.group
    const awayWinnerIndex = eight.awayTeamKeys.index

    if(groups[awayGroupLetter].length >= 2 ){
      const countryObj = groups[awayGroupLetter][awayWinnerIndex]
      eight.awayTeam = countryObj.country
    }

    return eight
  })
  return newFinal18
}


  render() {

    const groupIdFromUrl = "C"

    return (
      <div>
        <div className="header-headline">
          <h1>Vilka vinner VM – du avgör!</h1>
          <h3>Tippa hela mästerskapet</h3>
        </div>
        <div className="groupstage-headline">
          <p>Gruppspel</p>
        </div>
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
              time={this.time}
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
          <Final18 final18={this.state.final18} />
        </div>
      </div>

    )

  }
}

export default App
