import React from "react"
import "./game.css"



class Game extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    const { game } = this.props
    console.log('game: ', game)
    console.log('this.props: ', this.props)
    return (
      <div className="game-container">
        <label>
          <p>{game.homeTeam} – {game.awayTeam}</p>
          <div className="game-row">
          <input type="value" name="homeScore" />
          <p>-</p>
          <input type="value" name="awayScore" />
        </div>
        </label>
      </div>
    )
  }

}

export default Game
