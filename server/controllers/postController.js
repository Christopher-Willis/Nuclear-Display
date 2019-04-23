const Nuclide = require("../models/NuclideModel");
const Element = require("../models/ElementModel");
const fetch = require('node-fetch');


// exports.uploadFromFile = function uploadFromFile(request,response){
//   fetch(fileName)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson.NuclideDataArray.Nuclide);
//   });
//   return response.send("file uploading")
// }

exports.uploadNuclides = function uploadNuclides(request, response) {  
  const tempBody = request.body
  tempBody.forEach( (nuclide,index) => {
    let newNuclide = new Nuclide({
      nuclideID: nuclide.nuclideID,
      name: nuclide.name,
      atomicMass: nuclide.atomicMass,
      naturalFraction: nuclide.naturalFraction,
      decayConstant: nuclide.decayConstant,
      recoverableEnergyMeV: nuclide.recoverableEnergyMeV,
      recoverableEnergyGamma: nuclide.recoverableEnergyGamma,
      FissionYields: nuclide.FissionYields,
      XSNeutronGamma: nuclide.XSNeutronGamma,
      DecayFractions: nuclide.DecayFractions,
      XSNeutroAlpha: nuclide.XSNeutroAlpha,
      XSNeutronProton: nuclide.XSNeutronProton,
      XSNeutron2Neutron: nuclide.XSNeutron2Neutron,
      XSNeutron3Neutron: nuclide.XSNeutron3Neutron,
      XSNeutronFission: nuclide.XSNeutronFission
    })
    Nuclide.findOne({"nuclideID":newNuclide.nuclideID},function(err, resad){
      if (err) return console.error(err)
      if(resad){
        console.log(`Nuclide ${resad.nuclideID} already in database`)
      }
      else{
        console.log(`Not found, adding ${newNuclide.nuclideID} to database`)
        newNuclide.save(function (err, nuclide) {
          if (err) return console.error(err)
          console.log(`Successfully uploaded ${newNuclide.nuclideID}`)
        })
      }
    })
  })
  return response.send("Upload in progress")
}

exports.uploadElements = function uploadElements(request, response) {  
  const tempBody = request.body
  tempBody.forEach( (element,index) => {
    let newElement = new Element({
      name: element.name,
      appearance: element.appearance,
      atomic_mass: element.atomic_mass,
      boil: element.boil,
      category: element.category,
      color: element.color,
      density: element.density,
      discovered_by: element.discovered_by,
      melt: element.melt,
      molar_heat: element.molar_heat,
      named_by: element.named_by,
      number: element.number,
      period:element.period,
      phase:element.phase,
      source:element.source,
      spectral_img:element.spectral_img,
      summary:element.summary,
      symbol:element.symbol,
      xpos:element.xpos,
      ypos:element.ypos,
      shells:element.shells,
      electron_configuration:element.electron_configuration,
      electron_affinity:element.electron_affinity,
      electronegativity_pauling:element.electronegativity_pauling,
      ionization_energies:element.ionization_energies
    })
    Element.findOne({"name":newElement.name},function(err, resad){
      if (err) return console.error(err)
      if(resad){
        console.log(`Element ${resad.name} already in database`)
      }
      else{
        console.log(`Not found, adding ${newElement.name} to database`)
        newElement.save(function (err, nuclide) {
          if (err) return console.error(err)
          console.log(`Successfully uploaded ${newElement.name}`)
        })
      }
    })
  })
  return response.send("Upload in progress")
}