import React from "react"
import Game from "./game"

class Final extends React.Component {



render() {

  // console.log(this.props.final14)

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> FINAL </span></p>
          </div>
          {<Game
            addScore={this.props.addScore}
            game={this.props.final} />}

        </div>
    )
  }
}

    export default Final
