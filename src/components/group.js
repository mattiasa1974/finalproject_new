import React from "react"
import "./game.css"



class Group extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div>
        {this.props.groupA}
      </div>
    )
  }

}

export default Group
