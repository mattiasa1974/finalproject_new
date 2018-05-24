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
          {this.props.final.map((finalData) => {


            return (<Game
                    addScore={this.props.addScore}
                    game={finalData} />)
          })}

        </div>
    )
  }
}

    export default Final
