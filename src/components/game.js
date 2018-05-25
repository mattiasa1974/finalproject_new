import React from "react"
import "./game.css"

class Game extends React.Component {

  state = {
    homeScore: null,
    awayScore: null
  }

  constructor(props) {
    super(props);

    this.state = {
      homeScore: this.props.game.homeScore,
      awayScore: this.props.game.awayScore
    }
  }

  handleChangeHomeScore = event => {
    // console.log('handleChangeHomeScore', event.target.value);
    if (this.state.awayScore !== null) {
      console.log('here')
      this.props.addScore(this.props.game.matchId,
        this.props.game.awayTeam,
        this.state.newAwayScore,
        this.props.game.homeTeam,
        event.target.value)
    }

    this.setState({
      homeScore: event.target.value,
    })
  }

  handleChangeAwayScore = event => {
    if (this.state.homeScore !== null) {
      this.props.addScore(this.props.game.matchId,
        this.props.game.awayTeam,
        event.target.value,
        this.props.game.homeTeam,
        this.state.homeScore)
    }

    this.setState({
      awayScore: event.target.value
    })
  }

  render() {
    const { game } = this.props
    // console.log("** game", game)

    return (
      <div className="gamebox">
        <div className="game-container">
          <div className="date">
            <p>{game.date}</p>
          </div>
          <div className="time">
            <p>Kl: {game.time}. Tv: {game.channel}.</p>
          </div>
          <div className="match">
            <p > {game.homeTeam} – {game.awayTeam}</p>
          </div>
          <div className="tips">
            <p>Ditt tips:</p>
          </div>
          <div className="inputfields">
            <label >
              <input className="input"
                value={this.state.homeScore}
                onChange={this.handleChangeHomeScore}
                type="number">
              </input> –
              <input className="input"
                onChange={this.handleChangeAwayScore}
                type="number"
                value={this.state.awayScore}>
              </input>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Game

// import React from "react"
// import "./game.css"
//
//
//
//
// class Game extends React.Component {
//
//   state = {
//     newHomeScore: null,
//     newAwayScore: null
//   }
//
//
//   // constructor(props) {
//   //   super(props)
//   // }
//
//
//   handleChangeHomeScore = event => {
//     this.setState({
//       newHomeScore: event.target.value,
//     })
//     if (this.state.newAwayScore !== null) {
//     this.props.addScore(this.props.game.matchId,
//       this.props.game.awayTeam,
//       this.state.newAwayScore,
//       this.props.game.homeTeam,
//       event.target.value)
//     }
//   }
//
//   handleChangeAwayScore = event => {
//     this.setState({
//       newAwayScore: event.target.value
//     })
//     if (this.state.newHomeScore !== null) {
//     this.props.addScore(this.props.game.matchId,
//       this.props.game.awayTeam,
//       event.target.value,
//       this.props.game.homeTeam,
//       this.state.newHomeScore)
//       console.log(this.state.newAwayScore)
//       console.log(event.target.value)
//     }
//   }
//
//   render() {
//     const { game } = this.props
//     console.log('game: ', game)
//     //console.log('this.props: ', this.props)
//
//     return (
//       <div className="gamebox">
//         <div className="game-container">
//           <div className="date">
//             <p>{this.props.game.date}</p>
//           </div>
//           <div className="time">
//             <p>Kl: {this.props.game.time}. Tv: {this.props.game.channel}.</p>
//           </div>
//           <div className="match">
//             <p > {this.props.game.homeTeam} – {this.props.game.awayTeam}</p>
//           </div>
//           <div className="tips">
//             <p>Ditt tips:</p>
//           </div>
//           <div className="inputfields">
//             <label >
//                 <input className="input"
//                   value={this.state.HomeScore}
//                   onChange={this.handleChangeHomeScore}
//                   type="number"
//                   score={game.homeScore} >
//                 </input> –
//                 <input className="input"
//                   onChange={this.handleChangeAwayScore}
//                   type="number"
//                   score={game.awayScore} >
//                 </input>
//             </label>
//           </div>
//         </div>
//       </div>
//     )
//       }
//       }
//
//
//
//
// export default Game
