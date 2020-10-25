import Action, {State} from "../declerations/interfaces";
import { Middleware } from 'redux'

const logger: Middleware<{}, State> = (store) => (next: Function) => (action: Action) => {
  console.group(action.type)
  console.log('the action is: ',action)
  const result = next(action)
  console.log('new state is: ', store.getState())
  console.groupEnd()
  return  result
}

export default logger