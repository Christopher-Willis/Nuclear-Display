import { combineReducers } from 'redux'

function nuclides(state=[], action){
  if(action.type === "ADD_NUCLIDES"){
    return [...state,...action.value]
  }
  return state;
}   

function elements(state=[], action){
  if(action.type === "ADD_ELEMENTS"){
    return [...state,...action.value]
  }
  return state;
}   

function selectedItem(state="",action){
  if(action.type === "CHANGE_ELEMENTISOTOPE"){
    return action.value
  }
  return state
}

function chemPhySelected(state=0,action){
  if(action.type === "CHANGE_MENUCHEMPHYS"){
    return action.value
  }
  return state
}

const reducers = combineReducers({
  nuclides,elements,selectedItem,chemPhySelected
})

export default reducers;