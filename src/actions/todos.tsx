// @ts-ignore
import API from 'goals-todos-api'
import { Todos } from "../declerations/interfaces";

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo(todo: Todos){
  return {
    type: ADD_TODO,
    todo
  }
}
function removeTodo(id: Number){
  return {
    type: REMOVE_TODO,
    id
  }
}
function toggleTodo(action: Number){
  return {
    type: TOGGLE_TODO,
    id: action
  }
}
export function handleDeleteTodo(todo: Todos) {
  return (dispatch: Function) => {
    dispatch(removeTodo(todo.id))
    return API.deleteTodo(todo.id).catch(()=>{
      dispatch(addTodo(todo))
      alert("an error occurred")
    })
  }
}

export function handleToggleTodo(id: Number){
  return (dispatch: Function)=>{
    dispatch(toggleTodo(id))
    return API.saveTodoToggle(id).catch(()=>{
      dispatch(toggleTodo(id))
      alert("an error occurred")
    })
  }
}

export function handleAddTodo(todo: String, cb: Function){
  return (dispatch: Function) => {
    API.saveTodo(todo).then((todo: Todos)=>{
      dispatch(addTodo(todo))
      cb()
    }).catch(()=>{
      alert("an error occurred")
    })
  }
}