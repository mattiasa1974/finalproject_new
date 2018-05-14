import React from "react"



class Game extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    const { game } = this.props
    console.log('game: ', game)
    console.log('this.props: ', this.props)
    return (
      <div className="match">
        <label>
          <p>{game.homeTeam} – {game.awayTeam}</p>
        </label>
      </div>
    )
  }

}

export default Game
