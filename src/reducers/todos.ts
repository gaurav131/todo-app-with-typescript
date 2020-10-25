import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions/todos";
import {RECEIVE_DATA} from "../actions/shared";
import Action, {Todos} from "../declerations/interfaces";

export default function todos(state: Todos[] = [], action: Action) {
  switch (action.type) {
    case ADD_TODO:
        return state.concat([action.todo])
    case REMOVE_TODO:
      return state.filter((value: Todos) => value.id!==action.id)
    case TOGGLE_TODO:
      return state.map((todo: Todos) => todo.id !== action.id ? todo :
        Object.assign({}, todo, { complete: !todo.complete }))
    case RECEIVE_DATA:
      return action.todo
    default:
      return state
  }
}