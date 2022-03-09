import { Component } from "react"

export default class MoodPoints extends Component {
  render() {
    return (
      <div>
        <p>on a scale of 1 - 10</p>

        <p>you are currently this happy: {this.props.points}</p>
      </div>
    )
  }
} 