import React from "react";
import { HashRouter, Route, NavLink } from "react-router-dom"
import Group from "./group"
import { calculateResult } from "./calculateresult"
import "./groupnavigationcomponent.css"
import "./group.css"
import Final18 from "./final18"
import Final14 from "./final14"
import Final12 from "./final12"
import Final from "./final"
import Brons from "./brons"


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
      },
      {
        group: "A",
        country: "Saudiarabien",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        diffScore: "0",
        points: "0"
      },
      {
        group: "A",
        country: "Egypten",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        diffScore: "0",
        points: "0"
      },
      {
        group: "A",
        country: "Uruguay",
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
      matchId: 14,
      date: "16/6",
      homeTeam: "Peru",
      awayTeam: "Danmark",
      homeScore: null,
      awayScore: null,
      group: "C",
      time: "18.00",
      channel: "TV4"
    },
    {
      matchId: 15,
      date: "21/6",
      homeTeam: "Danmark",
      awayTeam: "Australien",
      homeScore: null,
      awayScore: null,
      group: "C",
      time: "14.00",
      channel: "TV4"
    },
    {
      matchId: 16,
      date: "21/6",
      homeTeam: "Frankrike",
      awayTeam: "Peru",
      homeScore: null,
      awayScore: null,
      group: "C",
      time: "17.00",
      channel: "TV4"
    },
    {
      matchId: 17,
      date: "26/6",
      homeTeam: "Danmark",
      awayTeam: "Frankrike",
      homeScore: null,
      awayScore: null,
      group: "C",
      time: "16.00",
      channel: "SVT"
    },
    {
      matchId: 18,
      date: "26/6",
      homeTeam: "Australien",
      awayTeam: "Peru",
      homeScore: null,
      awayScore: null,
      group: "C",
      time: "16.00",
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
      matchId: 20,
      date: "16/6",
      homeTeam: "Kroatien",
      awayTeam: "Nigeria",
      homeScore: null,
      awayScore: null,
      group: "D",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 21,
      date: "21/6",
      homeTeam: "Argentina",
      awayTeam: "Kroatien",
      homeScore: null,
      awayScore: null,
      group: "D",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 22,
      date: "22/6",
      homeTeam: "Nigeria",
      awayTeam: "Island",
      homeScore: null,
      awayScore: null,
      group: "D",
      time: "17.00",
      channel: "SVT"
    },
    {
      matchId: 23,
      date: "26/6",
      homeTeam: "Nigeria",
      awayTeam: "Argentina",
      homeScore: null,
      awayScore: null,
      group: "D",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 24,
      date: "26/6",
      homeTeam: "Island",
      awayTeam: "Kroatien",
      homeScore: null,
      awayScore: null,
      group: "D",
      time: "20.00",
      channel: "TV4"
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
      matchId: 26,
      date: "17/6",
      homeTeam: "Brasilien",
      awayTeam: "Schweiz",
      homeScore: null,
      awayScore: null,
      group: "E",
      time: "20.00",
      channel: "SVT"
    },
    {
      matchId: 27,
      date: "22/6",
      homeTeam: "Brasilien",
      awayTeam: "Costa Rica",
      homeScore: null,
      awayScore: null,
      group: "E",
      time: "14.00",
      channel: "SVT"
    },
    {
      matchId: 28,
      date: "22/6",
      homeTeam: "Serbien",
      awayTeam: "Schweiz",
      homeScore: null,
      awayScore: null,
      group: "E",
      time: "20.00",
      channel: "SVT"
    },
    {
      matchId: 29,
      date: "27/6",
      homeTeam: "Serbien",
      awayTeam: "Brasilien",
      homeScore: null,
      awayScore: null,
      group: "E",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 30,
      date: "27/6",
      homeTeam: "Schweiz",
      awayTeam: "Costa Rica",
      homeScore: null,
      awayScore: null,
      group: "E",
      time: "20.00",
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
      matchId: 32,
      date: "18/6",
      homeTeam: "Sverige",
      awayTeam: "Sydkorea",
      homeScore: null,
      awayScore: null,
      group: "F",
      time: "14.00",
      channel: "SVT"
    },
    {
      matchId: 33,
      date: "23/6",
      homeTeam: "Sydkorea",
      awayTeam: "Mexiko",
      homeScore: null,
      awayScore: null,
      group: "F",
      time: "17.00",
      channel: "TV4"
    },
    {
      matchId: 34,
      date: "23/6",
      homeTeam: "Tyskland",
      awayTeam: "Sverige",
      homeScore: null,
      awayScore: null,
      group: "F",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 35,
      date: "27/6",
      homeTeam: "Sydkorea",
      awayTeam: "Tyskland",
      homeScore: null,
      awayScore: null,
      group: "F",
      time: "16.00",
      channel: "SVT"
    },
    {
      matchId: 36,
      date: "27/6",
      homeTeam: "Mexiko",
      awayTeam: "Sverige",
      homeScore: null,
      awayScore: null,
      group: "F",
      time: "16.00",
      channel: "SVT"
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
      matchId: 38,
      date: "18/6",
      homeTeam: "Tunisien",
      awayTeam: "England",
      homeScore: null,
      awayScore: null,
      group: "G",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 39,
      date: "23/6",
      homeTeam: "Belgien",
      awayTeam: "Tunisien",
      homeScore: null,
      awayScore: null,
      group: "G",
      time: "14.00",
      channel: "SVT"
    },
    {
      matchId: 40,
      date: "24/6",
      homeTeam: "England",
      awayTeam: "Panama",
      homeScore: null,
      awayScore: null,
      group: "G",
      time: "14.00",
      channel: "SVT"
    },
    {
      matchId: 41,
      date: "28/6",
      homeTeam: "England",
      awayTeam: "Belgien",
      homeScore: null,
      awayScore: null,
      group: "G",
      time: "20.00",
      channel: "SVT"
    },
    {
      matchId: 42,
      date: "28/6",
      homeTeam: "Panama",
      awayTeam: "Tunisien",
      homeScore: null,
      awayScore: null,
      group: "G",
      time: "20.00",
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
    {
      matchId: 44,
      date: "19/6",
      homeTeam: "Polen",
      awayTeam: "Senegal",
      homeScore: null,
      awayScore: null,
      group: "H",
      time: "17.00",
      channel: "SVT"
    },
    {
      matchId: 45,
      date: "24/6",
      homeTeam: "Japan",
      awayTeam: "Senegal",
      homeScore: null,
      awayScore: null,
      group: "H",
      time: "17.00",
      channel: "TV4"
    },
    {
      matchId: 46,
      date: "24/6",
      homeTeam: "Polen",
      awayTeam: "Colombia",
      homeScore: null,
      awayScore: null,
      group: "H",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 47,
      date: "28/6",
      homeTeam: "Japan",
      awayTeam: "Polen",
      homeScore: null,
      awayScore: null,
      group: "H",
      time: "16.00",
      channel: "TV4"
    },
    {
      matchId: 48,
      date: "28/6",
      homeTeam: "Senegal",
      awayTeam: "Colombia",
      homeScore: null,
      awayScore: null,
      group: "H",
      time: "16.00",
      channel: "TV4"
    },
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
      date: "6/7",
      time: "16.00",
      channel: "SVT"
    },
    {
      matchId: 2,
      country: null,
      homeTeam: "1E / 2F",
      homeTeamIndex: 5,
      awayTeam: "1G / 2H",
      awayTeamIndex: 6,
      date: "6/7",
      time: "20.00",
      channel: "TV4"
    },
    {
      matchId: 3,
      country: null,
      homeTeam: "1F / 2E",
      homeTeamIndex: 7,
      awayTeam: "1H / 2G",
      awayTeamIndex: 8,
      date: "7/7",
      time: "16.00",
      channel: "TV4"
    },
    {
      matchId: 4,
      country: null,
      homeTeam: "1B / 2A",
      homeTeamIndex: 3,
      awayTeam: "1D / 2C",
      awayTeamIndex: 4,
      date: "7/7",
      time: "20.00",
      channel: "SVT"
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
      date: "10/7",
      time: "20.00",
      channel: "SVT"
    },
    {
      matchId: 2,
      country: null,
      homeTeam: "Kvartsfinal 3",
      homeTeamIndex: 3,
      awayTeam: "Kvartsfinal 4",
      awayTeamIndex: 4,
      date: "11/7",
      time: "20.00",
      channel: "TV4"
    }
  ],
  final:
    {
      matchId: 1,
      country: null,
      homeTeam: null,
      homeTeamIndex: 1,
      awayTeam: null,
      awayTeamIndex: 2,
      date: "15/7",
      time: "17.00",
      channel: "SVT"
    },
    brons: {
      matchId: 1,
      country: null,
      homeTeam: null,
      homeTeamIndex: 1,
      awayTeam: null,
      awayTeamIndex: 2,
      date: "14/7",
      time: "16.00",
      channel: "TV4"
    }
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
        const { final, brons } = this.state

        if(final.homeTeamIndex === matchId){
          // console.log("hej")
          if (homeScore > awayScore) {
            final.homeTeam = homeTeam
          }else{
            final.homeTeam = awayTeam
          }
        }else{
          // console.log("hi")
          if (homeScore > awayScore) {
            final.awayTeam = homeTeam
          }else{
            final.awayTeam = awayTeam
          }
        }

        if(brons.homeTeamIndex === matchId){
          // console.log("hej")
          if (homeScore < awayScore) {
            brons.homeTeam = homeTeam
          }else{
            brons.homeTeam = awayTeam
          }
        }else{
          // console.log("hi")
          if (homeScore < awayScore) {
            brons.awayTeam = homeTeam
          }else{
            brons.awayTeam = awayTeam
          }
        }

        this.setState({ final, brons })
      }

      handleScoreFinal = (matchId, awayTeam, awayScore,
        homeTeam, homeScore) => {
          const { Final } = this.state

          if (homeScore > awayScore) {
            this.setState({ winner: homeTeam})
          } else {
            this.setState({ winner: awayTeam})
          }
        }

        handleScoreBrons = (matchId, awayTeam, awayScore,
          homeTeam, homeScore) => {
            const { Brons } = this.state

            if (homeScore > awayScore) {
              this.setState({ Brons: homeTeam})
            } else {
              this.setState({ Brons: awayTeam})
            }
          }



handleScore = (matchId, awayTeam, awayScore,
  homeTeam, homeScore) => {
  // console.log(matchId, awayTeam, awayScore)
  const { games, groups } = this.state

  const index = games.findIndex((game) => game.matchId === matchId)
  games[index].awayScore = awayScore
  games[index].homeScore = homeScore

  console.log("hejjjj", this.state.awayScore)

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

// pym.js

componentDidMount() {

        const pym = require('pym.js'); // We use require since import can't be used inside an if-statement.
        const pymChild = pym.Child({polling: 250}); // Poll for height changes every 250ms and send to parent. (read the Pym docs for more info)
        pymChild.sendMessage('init');


}

// slut pym.js

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

    const groupIdFromUrl = ""

    return (
      <div>
        <div className="header-headline">
          <h1>Vilka vinner VM – du avgör!</h1>
          <h3>Tippa hela mästerskapet</h3>
        </div>
        <div className="groupstage-headline">
          <p>Gruppspel</p>
        </div>
      <HashRouter>
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
      </HashRouter>
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
        <div>
          <Brons
            table={this.state.table}
          addScore = {this.handleScoreBrons}
          brons={this.state.brons} />
        </div>
        <div>
          <Final
            table={this.state.table}
          addScore = {this.handleScoreFinal}
          final={this.state.final} />
        </div>
      </div>

    )

  }
}

export default App
