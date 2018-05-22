import React from "react"
import Game from "./game"

class Final18 extends React.Component {


  constructor(props) {
    super(props)

    this.state =
    {
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
    awayTeamkeys: {group: "C", index: 1},
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






render() {

    console.log(this.props.groups)

    return (
      <div>
        <h1>hw</h1>
      </div>
      // {this.props.groups.map((xx) => {
      //
      // })}
      //
      //
      // groups   game => {
      //   const country = group[final18.homeTeamKeys.group][final18.homeTeamKeys.index]}


      //   <div>
      //
      //   game => {
      //   const country = group[game.homeTeamKeys.group][game.homeTeamKeys.index]}
      //
      //
      //     { this.props.groups.map((final18Data) => {
      //
      //       if (final18Data.group === this.props.match.params.groupId)
      //       {
      //        return (<Game
      //
      //
      //               addScore = {this.props.addScore}
      //               game={gameData}
      //               country={this.props.country}
      //               playedGames={this.props.playedGames}
      //               wins={this.props.wins}
      //               draws={this.props.draws}
      //               losts={this.props.losts}
      //               totOwnScore={this.props.totOwnScore}
      //               totAgainstScore={this.props.totAgainstScore}
      //               points={this.props.points} />)
      //     }
      //   })}
      //   </div>
    )


  }
}

    export default Final18
