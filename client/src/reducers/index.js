import { combineReducers } from 'redux'

function nuclides(state=[], action){
  if(action.type === "ADD_NUCLIDES"){
    return [...state,...action.value]
  }
  return state;
}   


const reducers = combineReducers({
  nuclides
})

export default reducers;