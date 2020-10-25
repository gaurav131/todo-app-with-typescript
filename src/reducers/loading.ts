import {RECEIVE_DATA} from "../actions/shared";
import Action from "../declerations/interfaces";

export default function loading(state=true, action: Action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return false
    default:
      return state
  }
}