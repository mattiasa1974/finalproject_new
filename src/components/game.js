import React from "react"
import "./game.css"



class Game extends React.Component {

  state = {
    newHomeScore: null,
    newAwayScore: null
  }


  // constructor(props) {
  //   super(props)
  // }


  handleChangeHomeScore = event => {
    this.setState({
      newHomeScore: event.target.value,
    })
    this.props.addHomeScore(this.props.game.matchId,
      this.props.game.homeTeam,
      event.target.value)
  }

  handleChangeAwayScore = event => {
    this.setState({
      newAwayScore: event.target.value
    })
    this.props.addAwayScore(this.props.game.matchId,
      this.props.game.awayTeam,
      event.target.value)
  }

  render() {
    const { game } = this.props
    console.log('game: ', game)
    //console.log('this.props: ', this.props)

    return (
      <div className="game-container">
        <div>
        <p>{this.props.game.date}</p>
        <p>{this.props.game.homeTeam} – {this.props.game.awayTeam}</p>
        <p>{this.props.country}</p>
          <label>
              <input
                value={this.state.newHomeScore}
                onChange={this.handleChangeHomeScore}
                type="number"
                score={game.homeScore} >
              </input> –
              <input
                onChange={this.handleChangeAwayScore}
                type="number"
                score={game.awayScore} >
              </input>
          </label>
        </div>
        <div>
          <p>hello</p>
          <p>{this.props.country}</p>
        </div>
      </div>
    )
      }
      }




export default Game
