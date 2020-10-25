import React from "react";
import {handleAddGoal, handleRemoveGoal} from "../actions/goals";
import ListItems from "./list";
import {connect} from 'react-redux'
import {Goals} from "../declerations/interfaces";

interface Props {
  dispatch: Function,
  goals: Goals[]
}

class GoalList extends React.Component<Props> {
  // @ts-ignore
  private input: HTMLInputElement;
  addGoalItem = (e: React.MouseEvent) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(this.input.value, () => this.input.value = ''))

  }
  removeItem = (goal: Goals) => {
    this.props.dispatch(handleRemoveGoal(goal))
  }

  render() {
    return (
        <div>
          <h1>Goal List</h1>
          <input type='text' ref={(input: HTMLInputElement) => (this.input = input)} placeholder='Add Goal'/>
          <button onClick={this.addGoalItem}>Add Goal</button>
          <ListItems items={this.props.goals} toggle={null} removeItem={this.removeItem}/>
        </div>
    )
  }
}


export default connect(state => ({
  // @ts-ignore
  goals: state.goals
}))(GoalList)