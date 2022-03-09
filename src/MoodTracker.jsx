import { Component } from 'react'
import MoodPoints from './MoodPoints'

export default class MoodTracker extends Component {
  // // using a constructor to manage class
  // constructor() {
  //   // first thing is invoke super
  //   super()
  //   // state it defined as an object called state
  //   this.state = {
  //     points: 9,
  //     fruit: 'banana'
  //   }
  //   // if you dont use an arrow function for a method
  //   // this line of code
  //   // this.handleSetToTen = this.handleSetToTen.bind(this)
  //   // run any init you need
  //   console.log(this)
  // }
  // class field declaration -- new in react v16
  // state = {
  //   points: 9,
  //   fruit: 'banana'
  // }

  handleIncreaseMood = () => {
    // console.log('button was clicked')
    // sets state, and triggers a re-render
    // takes a cb or an object of the new state
    // if yo uneed t orefer to the previous state -- you have to use the cb 
    this.setState((previousState, props) => {
      // whatever is returned (shoud be an object) -- will be the new state
      return {
        points: previousState.points + 1 // increment the previous state value
      }
    }, () => console.log('updated:', this.state)) // will be invoked wil the state is udpate
    console.log('not updateed:', this.state) // will not work
  }

  // handleSetToTen = () => {
  //   // setting state with an object, does not need prev state, so function is not needed
  //   this.setState({
  //     points: 10
  //   })
  // }

  // non arrow, regular instance method
  handleSetToTen() {
    // setting state with an object, does not need prev state, so function is not needed
    this.setState({
      points: 10
    })
  }

  render() {
    return (
      <div>
        <h1>Mood Tracker</h1>

        <button onClick={this.handleIncreaseMood}>🌈</button>

        <button onClick={this.handleSetToTen}>set mood to 10</button>

        <MoodPoints points={this.state.points} />
      </div>
    )
  }
}