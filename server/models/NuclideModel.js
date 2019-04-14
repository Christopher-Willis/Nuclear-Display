const mongoose = require('mongoose');


const nuclides = new mongoose.Schema({
  nuclideID: {type:String,required:true},
  name: {type:String,require:true},
  atomicMass: String,
  naturalFraction: String,
  decayConstant: String,
  recoverableEnergyMeV: String,
  recoverableEnergyGamma: String,
  FissionYields: Object,
  XSNeutronGamma: Object,
  DecayFractions: Object,
  XSNeutroAlpha: Object,
  XSNeutronProton: Object,
  XSNeutron2Neutron:Object,
  XSNeutron3Neutron:Object,
  XSNeutronFission:Object
});

const nuclide = mongoose.model('Nuclide', nuclides);

module.exports = nuclide;