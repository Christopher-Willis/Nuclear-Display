exports.listIsotope = function listIsotope(request, response) {  
  if(request.params.proton && request.params.mass){
    return response.json(request.params)
  }
  return response.send("All")
}

