// exports.listIsotope = function listIsotope(request, response) {  
//   if(request.params.proton && request.params.mass){
//     return response.json(request.params)
//   }
//   return response.send("All")
// }

const Nuclide = require("../models/NuclideModel");
const Element = require("../models/ElementModel");




exports.isotopes = function isotopes(request, response) {  
  Nuclide.find(function (err, messages) {
    if (err) return console.error(err) 
    return response.json(messages)
  })
}

exports.listIsotope = function listIsotope(request, response) { 
  let searchPath = `${request.params.proton}${request.params.mass.padStart(3, '0')}${request.params.metastable}`;  
  // the strange naming convention requires some padding for zeros, its a 5 digit number for amounts less than 10 protons

  console.log("Searching for " +searchPath)
  Nuclide.findOne({"nuclideID":searchPath},function(err, resad){
    if (err) return console.error(err) 
    return response.json(resad)

  })
}


exports.elements = function elements(request, response) {  
  Element.find(function (err, messages) {
    if (err) return console.error(err) 
    return response.json(messages)
  })
}

exports.listElement = function listElement(request, response) { 
  let searchPath = `${request.params.number}`;  
  // the strange naming convention requires some padding for zeros, its a 5 digit number for amounts less than 10 protons

  console.log("Searching for element " +searchPath)
  Element.findOne({"number":searchPath},function(err, resad){
    if (err) return console.error(err) 
    return response.json(resad)

  })
}


// exports.show = function show(request, response) {
//   Message.findById(request.params.id,function (err, messages) {
//     if (err) return console.error(err)        
//     return response.json(messages)
//   })
// }
// exports.create = function create(request, response) {  
//   const tempBody = request.body
//   const newOrder = new Order({
//   name: tempBody.name,
//   date: tempBody.date,
//   message: tempBody.message

//   });
//   newMessage.save(function (err, messages) {
//     if (err) return console.error(err)        
//     return response.json(messages)
//   })
// }
// exports.update = function update(request, response) {
//   // not yet implimented
//   return response.json({theId: request.params.id});
// }
// exports.remove = function remove(request, response) {
//   // not yet implimented
//   return response.json({});
// }