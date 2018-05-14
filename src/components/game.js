import React from "react"
import "./game.css"



class Game extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    const { game } = this.props
    // console.log('game: ', game)
    // console.log('this.props: ', this.props)
    return (
      <div className="game-container">
          <label className="game-input">
            <p>{game.homeTeam} – {game.awayTeam}</p>
            <div className="game-row">
            <input
              type="value"
              name="homeScore"
              value={this.props.homeScore}
              onChange={(event) => this.props.handleChangeHomeScore(event)} />
            <p>-</p>
            <input
              type="value"
              name="awayScore"
              value={this.props.awayScore}
              onChange={(event) => this.props.handleChangeAwayScore(event)}
            />
          </div>
        </label>
      </div>
    )
  }
}

export default Game
