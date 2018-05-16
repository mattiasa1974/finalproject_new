import React from "react"
import "./groupnavigationcomponent.css"



class Groupnavigationcomponent extends React.Component {

  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div className="groupbox">
        <p>{this.props.group}</p>
      </div>
    )
  }

}

export default Groupnavigationcomponent
