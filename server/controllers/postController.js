const Nuclide = require("../models/NuclideModel");
const data = require("../data.json")
const fileName = "http://becurieus.com/files/data.json"
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

exports.upload = function upload(request, response) {  
  const tempBody = request.body
  let filesNotUploaded = 0
  let filseUploaded = 0
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

