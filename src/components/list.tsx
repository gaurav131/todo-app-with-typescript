import React from "react";
import {Goals, Todos} from "../declerations/interfaces";
export default function ListItems(props: {items: Array<any>, removeItem: Function, toggle: Function|null}){
  return (<ul>
    {props.items.map((item: Goals|Todos) => {
      return <li key={item.id.toString()}>
                <span onClick={()=>props.toggle && props.toggle(item.id)}
                      style={{textDecoration: "complete" in item && item.complete?'line-through': 'none'}}>{item.name}</span>
        <button onClick={() => props.removeItem(item)}>X</button></li>
    })}
  </ul>)
}