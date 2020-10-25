// @ts-ignore
import API from 'goals-todos-api'
import {Goals, Todos} from "../declerations/interfaces";

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(todo: Todos, goal: Goals) {
  return{
    type: RECEIVE_DATA,
    todo,
    goal
  }
}

export default function handleInitialData(){
  return (dispatch: Function)=>{
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals])=>{
      dispatch(receiveData(todos, goals))
    })
  }
}
