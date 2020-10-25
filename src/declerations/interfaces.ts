export default interface Action {
  type: String,
  todo: Todos,
  goal: Goals,
  id: number
}

export interface Todos {
  name: String,
  id: Number,
  complete: Boolean
}

export interface Goals {
  name: String,
  id: Number
}

export interface State {
  todos: Todos[],
  goals: Goals[],
  loading: Boolean
}