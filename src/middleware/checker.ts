import {ADD_TODO} from "../actions/todos";
import {ADD_GOAL} from "../actions/goals";
import Action, {State} from "../declerations/interfaces";
import { Middleware } from 'redux'
const checker: Middleware<{}, State> = (store) => (next: Function) => (action: Action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')){
    return alert('This is strictly prohibited')
  }
  if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')){
    return alert('This is strictly prohibited')
  }
  return next(action)
}

export default checker