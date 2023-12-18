import React,{useReducer} from 'react'

const reducer = (state,action)=>{
  let {type}=action;


  if(type=="INCREASE"){
    return state+1
  }
  if(type=="DECREASE"){
    return state-1
  }
  return state
}

const initVal=0

export default function UseReducer() {
  const [count,dispatch]=useReducer(reducer,initVal)

  return (
    <div>
      <h1>Count</h1>
      <button onClick={()=>dispatch({type:"INCREASE"})}>+</button>
      <h2>{count}</h2>
      <button onClick={()=>dispatch({type:"DECREASE"})}>-</button>
    </div>
  )
}
