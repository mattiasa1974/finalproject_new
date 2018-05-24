import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import Group from "./group"
import { calculateResult } from "./calculateresult"
import "./groupnavigationcomponent.css"
import "./group.css"
import Final18 from "./final18"
import Final14 from "./final14"
import Final12 from "./final12"

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
        group: "B",
        time: "17.00",
        channel: "SVT"
      },
      {
        matchId: 8,
        date: "15/6",
        homeTeam: "Portugal",
        awayTeam: "Spanien",
        homeScore: null,
        awayScore: null,
        group: "B",
        time: "20.00",
        channel: "SVT"
      },
      {
        matchId: 9,
        date: "20/6",
        homeTeam: "Portugal",
        awayTeam: "Marocko",
        homeScore: null,
        awayScore: null,
        group: "B",
        time: "14.00",
        channel: "SVT"
      },
      {
        matchId: 10,
        date: "20/6",
        homeTeam: "Iran",
        awayTeam: "Spanien",
        homeScore: null,
        awayScore: null,
        group: "B",
        time: "20.00",
        channel: "TV4"
      },
      {
        matchId: 11,
        date: "25/6",
        homeTeam: "Iran",
        awayTeam: "Portugal",
        homeScore: null,
        awayScore: null,
        group: "B",
        time: "20.00",
        channel: "SVT"
      },
      {
        matchId: 12,
        date: "25/6",
        homeTeam: "Spanien",
        awayTeam: "Marocko",
        homeScore: null,
        awayScore: null,
        group: "B",
        time: "20.00",
        channel: "SVT"
      },
      {
      matchId: 13,
      date: "16/6",
      homeTeam: "Frankrike",
      awayTeam: "Australien",
      homeScore: null,
      awayScore: null,
      group: "C",
      time: "12.00",
      channel: "SVT"
    },
    {
      matchId: 19,
      date: "16/6",
      homeTeam: "Argentina",
      awayTeam: "Island",
      homeScore: null,
      awayScore: null,
      group: "D",
      time: "15.00",
      channel: "SVT"
    },
    {
      matchId: 25,
      date: "17/6",
      homeTeam: "Costa Rica",
      awayTeam: "Serbien",
      homeScore: null,
      awayScore: null,
      group: "E",
      time: "14.00",
      channel: "TV4"
    },
    {
      matchId: 31,
      date: "17/6",
      homeTeam: "Tyskland",
      awayTeam: "Mexiko",
      homeScore: null,
      awayScore: null,
      group: "F",
      time: "17.00",
      channel: "TV4"
    },
    {
      matchId: 37,
      date: "18/6",
      homeTeam: "Belgien",
      awayTeam: "Panama",
      homeScore: null,
      awayScore: null,
      group: "G",
      time: "17.00",
      channel: "SVT"
    },
    {
      matchId: 43,
      date: "19/6",
      homeTeam: "Colombia",
      awayTeam: "Japan",
      homeScore: null,
      awayScore: null,
      group: "H",
      time: "14.00",
      channel: "TV4"
    },
    // {
    //   matchId: 49,
    //   date: "30/6",
    //   homeTeam: "1C",
    //   awayTeam: "2D",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 50,
    //   date: "30/6",
    //   homeTeam: "1A",
    //   awayTeam: "2B",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 51,
    //   date: "1/7",
    //   homeTeam: "1B",
    //   awayTeam: "2A",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 52,
    //   date: "1/7",
    //   homeTeam: "1D",
    //   awayTeam: "2C",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 53,
    //   date: "2/7",
    //   homeTeam: "1E",
    //   awayTeam: "2F",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 54,
    //   date: "2/7",
    //   homeTeam: "1G",
    //   awayTeam: "2H",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 55,
    //   date: "3/7",
    //   homeTeam: "1F",
    //   awayTeam: "2E",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // },
    // {
    //   matchId: 56,
    //   date: "3/7",
    //   homeTeam: "1H",
    //   awayTeam: "2G",
    //   homeScore: null,
    //   awayScore: null,
    //   group: "1_8"
    // }
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
    matchId: 1,
    date: "30/6",
    homeTeamKeys: {group: "C", index: 0},
    homeTeam: "1C",
    awayTeamKeys: {group: "D", index: 1},
    awayTeam: "2D",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "16.00",
    channel: "TV4"
  },
  {
    matchId: 2,
    date: "30/6",
    homeTeamKeys: {group: "A", index: 0},
    homeTeam: "1A",
    awayTeamKeys: {group: "B", index: 1},
    awayTeam: "2B",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "20.00",
    channel: "SVT"
  },
  {
    matchId: 3,
    date: "1/7",
    homeTeamKeys: {group: "B", index: 0},
    homeTeam: "1B",
    awayTeamKeys: {group: "A", index: 1},
    awayTeam: "2A",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "16.00",
    channel: "SVT"
  },
  {
    matchId: 4,
    date: "1/7",
    homeTeamKeys: {group: "D", index: 0},
    homeTeam: "1D",
    awayTeamKeys: {group: "C", index: 1},
    awayTeam: "2C",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "20.00",
    channel: "TV4"
  },
  {
    matchId: 5,
    date: "2/7",
    homeTeamKeys: {group: "E", index: 0},
    homeTeam: "1E",
    awayTeamKeys: {group: "F", index: 1},
    awayTeam: "2F",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "16.00",
    channel: "TV4"
  },
  {
    matchId: 6,
    date: "2/7",
    homeTeamKeys: {group: "G", index: 0},
    homeTeam: "1G",
    awayTeamKeys: {group: "H", index: 1},
    awayTeam: "2H",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "20.00",
    channel: "SVT"
  },
  {
    matchId: 7,
    date: "3/7",
    homeTeamKeys: {group: "F", index: 0},
    homeTeam: "1F",
    awayTeamKeys: {group: "E", index: 1},
    awayTeam: "2E",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "16.00",
    channel: "SVT"
  },
  {
    matchId: 8,
    date: "3/7",
    homeTeamKeys: {group: "H", index: 0},
    homeTeam: "1H",
    awayTeamKeys: {group: "G", index: 1},
    awayTeam: "2G",
    homeScore: null,
    awayScore: null,
    group: "1_8",
    time: "20.00",
    channel: "TV4"
  }
  ],
  final14:[
    {
      matchId: 1,
      country: null,
      homeTeam: "1C / 2D",
      homeTeamIndex: 1,
      awayTeam: "1A / 2B",
      awayTeamIndex: 2,
      date: "",
      time: "",
      channel: ""
    },
    {
      matchId: 2,
      country: null,
      homeTeam: "1E / 2F",
      homeTeamIndex: 5,
      awayTeam: "1G / 2H",
      awayTeamIndex: 6,
      date: "",
      time: "",
      channel: ""
    },
    {
      matchId: 3,
      country: null,
      homeTeam: "1F / 2E",
      homeTeamIndex: 7,
      awayTeam: "1H / 2G",
      awayTeamIndex: 8,
      date: "",
      time: "",
      channel: ""
    },
    {
      matchId: 4,
      country: null,
      homeTeam: "1B / 2A",
      homeTeamIndex: 3,
      awayTeam: "1D / 2C",
      awayTeamIndex: 4,
      date: "",
      time: "",
      channel: ""
    }
  ],
  final12:[
    {
      matchId: 1,
      country: null,
      homeTeam: "Kvartsfinal 1",
      homeTeamIndex: 1,
      awayTeam: "Kvartsfinal 2",
      awayTeamIndex: 2,
      date: "",
      time: "",
      channel: ""
    },
    {
      matchId: 2,
      country: null,
      homeTeam: "Kvartsfinal 3",
      homeTeamIndex: 3,
      awayTeam: "Kvartsfinal 4",
      awayTeamIndex: 4,
      date: "",
      time: "",
      channel: ""
    }
  ],
  final:[
    {
      matchId: 1,
      country: null,
      homeTeam: null,
      homeTeamIndex: 1,
      awayTeam: null,
      awayTeamIndex: 2,
      date: "",
      time: "",
      channel: ""
    },
    {
      matchId: 2,
      country: null,
      homeTeam: null,
      homeTeamIndex: 3,
      awayTeam: null,
      awayTeamIndex: 4,
      date: "",
      time: "",
      channel: ""
    }
    ]
  }

}

handleScore18 = (matchId, awayTeam, awayScore,
  homeTeam, homeScore) => {
    const { final14 } = this.state

    const index = final14.findIndex((game) => game.homeTeamIndex === matchId || game.awayTeamIndex === matchId)
    console.log("index", index)
    console.log("matchId", matchId)
    console.log("final14", final14)
    if(final14[index].homeTeamIndex === matchId){
      // console.log("hej")
      if (homeScore > awayScore) {
        final14[index].homeTeam = homeTeam
      }else{
        final14[index].homeTeam = awayTeam
      }
    }else{
      // console.log("hi")
      if (homeScore > awayScore) {
        final14[index].awayTeam = homeTeam
      }else{
        final14[index].awayTeam = awayTeam
      }
    }

    this.setState({ final14 })
  }

  handleScore14 = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
      const { final12 } = this.state

      const index = final12.findIndex((game) => game.homeTeamIndex === matchId || game.awayTeamIndex === matchId)
      if(final12[index].homeTeamIndex === matchId){
        // console.log("hej")
        if (homeScore > awayScore) {
          final12[index].homeTeam = homeTeam
        }else{
          final12[index].homeTeam = awayTeam
        }
      }else{
        // console.log("hi")
        if (homeScore > awayScore) {
          final12[index].awayTeam = homeTeam
        }else{
          final12[index].awayTeam = awayTeam
        }
      }

      this.setState({ final12 })
    }

    handleScore12 = (matchId, awayTeam, awayScore,
      homeTeam, homeScore) => {
        const { final } = this.state

        const index = final.findIndex((game) => game.homeTeamIndex === matchId || game.awayTeamIndex === matchId)
        if(final[index].homeTeamIndex === matchId){
          // console.log("hej")
          if (homeScore > awayScore) {
            final[index].homeTeam = homeTeam
          }else{
            final[index].homeTeam = awayTeam
          }
        }else{
          // console.log("hi")
          if (homeScore > awayScore) {
            final[index].awayTeam = homeTeam
          }else{
            final[index].awayTeam = awayTeam
          }
        }

        this.setState({ final })
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

  localStorage.setItem("games", JSON.stringify(games))

  const table = calculateResult(this.state.games)
  //console.log(table)
  const final18table = calculateResult(this.state.final18)
  console.log(final18table)

  // const unsortedTable = table
  // const sortedTable = unsortedTable.sort((a,b) => (a.diffScore < b.diffScore) || (a.points < b.points)  );
  // //console.log(sortedTable)
  //
  // this.setState({ table: sortedTable })



  // nollställ grupperna
  Object.keys(groups).forEach(key => {
    groups[key] = []
   }
  )
  table.forEach(country => {
    groups[country.group].push(country)
   }
  )

  Object.keys(groups).forEach(key => {

    const unsorted = groups[key]
    const sorted = unsorted.sort(this.compareScore)
    groups[key] = sorted

    this.setState({groups: groups})
  })

  //Set countrynames for final 18
  const newFinal18 = this.populateCountries()
  this.setState({final18: newFinal18})

}

compareScore = (a, b) => {
  if(a.points < b.points){
    return true
  } else if(a.points > b.points) {
    return false
  } else {
    if(a.diffScore < b.diffScore){
      return true
    } else if(a.diffScore > b.diffScore){
      return false
    } else {
      if(a.totOwnScore < b.totOwnScore){
        return true
      } else if (a.totOwnScore > b.totOwnScore){
        return false
      } else {
        return 0
      }
    }
  }
}


populateCountries = () => {
  const { groups, final18 } = this.state;
  const newFinal18 = final18.map(eight => {
    // console.log("hej", eight, eight.homeTeamKeys)
    const homeGroupLetter = eight.homeTeamKeys.group
    const homeWinnerIndex = eight.homeTeamKeys.index

    if(groups[homeGroupLetter].length >= 2 ){
      const countryObj = groups[homeGroupLetter][homeWinnerIndex]
      // console.log(countryObj)
      if (countryObj.playedGames > 0)
      eight.homeTeam = countryObj.country
    }

    const awayGroupLetter = eight.awayTeamKeys.group
    const awayWinnerIndex = eight.awayTeamKeys.index

    if(groups[awayGroupLetter].length >= 2 ){
      const countryObj = groups[awayGroupLetter][awayWinnerIndex]
      if (countryObj.playedGames > 0)
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
            <li><NavLink activeClassName={"groupboxActive"} to="/A" className="groupbox">A</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/B" className="groupbox">B</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/C" className="groupbox">C</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/D" className="groupbox">D</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/E" className="groupbox">E</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/F" className="groupbox">F</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/G" className="groupbox">G</NavLink></li>
            <li><NavLink activeClassName={"groupboxActive"} to="/H" className="groupbox">H</NavLink></li>
          </ul>

          <Route path="/:groupId"
            render={(props) => (
              <Group {...props}
              addScore = {this.handleScore}
              games={this.state.games}
              groups={this.state.groups}/>
            )}
            />
        </div>
      </BrowserRouter>
        <div>
          <Final18
            table={this.state.table}
          addScore = {this.handleScore18}
          final18={this.state.final18} />
        </div>
        <div>
          <Final14
            table={this.state.table}
          addScore = {this.handleScore14}
          final14={this.state.final14} />
        </div>
        <div>
          <Final12
            table={this.state.table}
          addScore = {this.handleScore12}
          final12={this.state.final12} />
        </div>
      </div>

    )

  }
}

export default App
