// @ts-ignore
import API from 'goals-todos-api'
import {Goals} from "../declerations/interfaces";

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal(goal: Goals) {
  return {
    type: ADD_GOAL,
    goal: goal
  }
}
function removeGoal(id: Number) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export function handleAddGoal(goal: String, cb: Function) {
  return (dispatch: Function) => {
    API.saveGoal(goal).then((goal: Goals)=>{
      dispatch(addGoal(goal))
      cb()
    }).catch(()=> {
      alert("an error occurred")
    })
  }
}
export function handleRemoveGoal(goal: Goals){
  return (dispatch: Function) => {
    dispatch(removeGoal(goal.id))
    return API.deleteGoal(goal.id).catch(()=>{
      dispatch(addGoal(goal))
      alert('an error occurred')
    })
  }
}