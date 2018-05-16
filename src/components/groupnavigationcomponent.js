import React from "react"
import "./groupnavigationcomponent.css"
import { BrowserRouter, Route, Link } from "react-router-dom"



class Groupnavigationcomponent extends React.Component {

  constructor(props) {
    super(props)

  }

  const Child = ({ match }) => (
    <div>
      <span>{match.group.params.id}<span>
    </div>
  )


  render() {
    return (
      <Router>
        <div className="groupbox">
          <Link to="/groupA"><p>{this.props.group}</p></Link>
          <Link to="/groupB"><p>{this.props.group}</p></Link>
          <Route path="/:id" component={Child} />
        </div>
      </Router>
    )
  }
}

export default Groupnavigationcomponent
