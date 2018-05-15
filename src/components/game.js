import React from "react"
import "./game.css"



class Game extends React.Component {

  state = {
    newHomeScore: "",
    newAwayScore: ""
  }


  // constructor(props) {
  //   super(props)
  // }


  handleChangeHomeScore = event => {
    this.setState({
      newHomeScore: event.target.value,
    })
console.log(event.target.value)
  }

  handleChangeAwayScore = event => {
    this.setState({
      newAwayScore: event.target.value
    })
console.log(event.target.value)
  }



  render() {
    const { game } = this.props
    // console.log('game: ', game)
    // console.log('this.props: ', this.props)

    return (
      <div className="game-container">
        <label>
          <p>{game.homeTeam} – {game.awayTeam}</p>
          <form>
            <input
              value={this.state.newHomeScore}
              onChange={this.handleChangeHomeScore}
              type="number"
              score={game.homeScore} >
            </input> –
            <input
              onChange={this.handleChangeAwayScore}
              score={game.awayScore} >
            </input>
            </form>
        </label>
      </div>
    )
  }

}


export default Game

// {this.props.games.map((game) => (
//   <p>{games.homeTeam} – {games.awayTeam} </p>
// ))}
// console.log(game)
//
//
//     <label className="game-input">
//       <p>{games[0].homeTeam} – {games[0].awayTeam}</p>
//       <div className="game-row">
//       <input
//         id="matchId"
//         type="value"
//         name="homeScore"
//         value={this.props.homeScore}
//         onChange={(event) => this.props.handleChangeHomeScore(event)} />
//       <p>-</p>
//       <input
//         id="matchId"
//         type="value"
//         name="awayScore"
//         value={this.props.awayScore}
//         onChange={(event) => this.props.handleChangeAwayScore(event)}
//       />
//     </div>
//   </label>
