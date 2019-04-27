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


export function changeMenuChemPhys(index){
  return {
    type:"CHANGE_MENUCHEMPHYS",
    value:index
  }
}

export function selectElementIsotope(elementIsotope){
  return {
    type:"CHANGE_ELEMENTISOTOPE",
    value:elementIsotope
  }
}