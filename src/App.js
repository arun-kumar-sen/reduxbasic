import React from 'react'
import "./App.css"
import { useSelector,useDispatch } from 'react-redux'
import { inc,dec } from './actions'

const App = () => {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
    <h1>Hello</h1>
    <div className="container">
      <h1>Redux</h1>

      <div className="quantity">
        <button onClick={()=>dispatch(inc(5))} title='Increment'>Increment</button>
        <input  type="text" value={myState} />
        <button onClick={()=>dispatch(dec())} title='Decrement'>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App
