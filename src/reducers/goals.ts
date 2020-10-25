import {ADD_GOAL, REMOVE_GOAL} from "../actions/goals";
import {RECEIVE_DATA} from "../actions/shared";
import Action, {Goals} from "../declerations/interfaces";
export default function goals (state: Goals[] = [], action: Action) {
  switch (action.type) {
    case ADD_GOAL:
        return state.concat([action.goal])
      case REMOVE_GOAL:
      return state.filter((value: Goals) => value.id !== action.id)
    case RECEIVE_DATA:
      return action.goal
    default:
      return state
  }
}