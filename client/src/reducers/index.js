import { combineReducers } from 'redux'

function nuclides(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1
  }
  return state;
}   


const reducers = combineReducers({
  nuclides
})

export default reducers;