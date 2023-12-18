import React, { useReducer, useRef } from "react";
import ToDoItem from "./ToDoItem";

const todoReducer = (state, action) => {
  if (action.type == "Add_Item") {
    return [...state, 
      { data: action.payload,
          isHidden: false 
        }];
  }

  if(action.type=="Change"){
    return state.map((e,i)=>{
      return i==action.payload?{...e,isHidden:!e.isHidden}:e
    })
  }
  return state
};

const initState = [];

export default function ToDoApp() {
  const [todo, dispatch] = useReducer(todoReducer, initState);

  const input = useRef(null);
  return (
    <div>
      <input
        ref={input}
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            dispatch({ type: "Add_Item",payload: e.target.value });
          }
        }}/>

        {todo.map((e,i)=>{
          return <ToDoItem item={e} index={i} dispatch={dispatch} />;
        })}

<button onClick={()=>{
        window.scrollTo({top:0,behavior:"smooth"})
        input.current.focus()
      }}>GO Back To Top</button>

    </div>
  );
}
