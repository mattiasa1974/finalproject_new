import React from "react"
import Game from "./game"

class Brons extends React.Component {



render() {

  // console.log(this.props.final14)

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> BRONSMATCH </span></p>
          </div>
          {this.props.brons.map((bronsData) => {


            return (<Game
                    addScore={this.props.addScore}
                    game={bronsData} />)
          })}

        </div>
    )
  }
}

    export default Brons
