import React from "react"
import Game from "./game"

class Final14 extends React.Component {



render() {

  console.log(this.props.final14)

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> KVARTSFINAL </span></p>
          </div>
          {/* {this.props.final14.map((final18Data) => { */}


            return (<Game
                    addScore={this.props.addScore}
                    game={final14Data} />)
          })}

          <h1>hw</h1>
        </div>
    )
  }
}

    export default Final14
