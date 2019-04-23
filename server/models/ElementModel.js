const mongoose = require('mongoose');


const elements = new mongoose.Schema({
  name: {type:String,required:true},
  appearance: {type:String,require:true},
  atomic_mass: Number,
  boil: Number,
  category: String,
  color: String,
  density: String,
  discovered_by: String,
  melt: Number,
  molar_heat: Number,
  named_by: String,
  number: Number,
  period:Number,
  phase:String,
  source:String,
  spectral_img:String,
  summary:String,
  symbol:String,
  xpos:Number,
  ypos:Number,
  shells:Array,
  electron_configuration:String,
  electron_affinity:Number,
  electronegativity_pauling:Number,
  ionization_energies:Array
});

const element = mongoose.model('Element', elements);

module.exports = element;