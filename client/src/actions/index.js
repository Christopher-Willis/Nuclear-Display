export function addNuclides(nuclides){
  return {
    type:"ADD_NUCLIDES",
    value:nuclides
  }
}

export function addElements(elements){
  return {
    type:"ADD_ELEMENTS",
    value:elements
  }
}