import React from 'react';
import handleInitialData from '../actions/shared'
import TodoList from "./todos";
import GoalList from "./goals";
import {connect} from "react-redux";
import {State} from "../declerations/interfaces";

interface Props {
  dispatch: Function,
  loading: Boolean
}

class App extends React.Component<Props> {
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }
  render() {
    if (this.props.loading){
      return <h3>Loading</h3>
    }
    return (
      <div>
        <TodoList/>
        <GoalList/>
      </div>
    )
  }
}

export default connect((state: State) => ({
  loading: state.loading
}))(App)