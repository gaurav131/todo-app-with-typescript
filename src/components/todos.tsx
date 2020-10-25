import React from "react";
import {handleAddTodo, handleToggleTodo, handleDeleteTodo} from "../actions/todos";
import ListItems from "./list";
import {connect} from "react-redux";
import {State, Todos} from "../declerations/interfaces";

interface Props {
  dispatch: Function,
  todos: Todos[]
}

class TodoList extends React.Component<Props>{

  // @ts-ignore
  private input: HTMLInputElement;
  addTodoItem = (e: React.MouseEvent)=>{
    e.preventDefault()
    this.props.dispatch(handleAddTodo(this.input.value, ()=>this.input.value=''))
  }
  removeItem = (todo: Todos)=>{
    this.props.dispatch(handleDeleteTodo(todo))
  }
  toggleItem = (id: Number) => {
    this.props.dispatch(handleToggleTodo(id))
  }
  render(){
    return(
      <div>
        <h1>TODO List</h1>
        <input type='text' ref={(input: HTMLInputElement) => (this.input = input)} placeholder='Add Todo'/>
        <button onClick={this.addTodoItem}>Add Todo</button>
        <ListItems items={this.props.todos} removeItem={this.removeItem} toggle={this.toggleItem}/>
      </div>
  )
  }
}


export default connect((state: State) => ({
  todos: state.todos
}))(TodoList)

