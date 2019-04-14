const mongoose = require('mongoose');


const nuclide = new mongoose.Schema({
  nuclideID: String,
  name: String,
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
  XSNeutronFission:Object,

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;