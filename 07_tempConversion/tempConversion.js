const ftoc = function(fharenheitInput) {
  let celsiusRes = (fharenheitInput - 32 ) * 5/9;
  //checking if the celsiusResult has the decimal point .
  if(celsiusRes % 1 !=0){
    let roundCelAns = Math.round(celsiusRes*10)/10;
    return roundCelAns;
  }
  return celsiusRes;
};

const ctof = function(celsisusInput) {
  let fharenheitRes = celsisusInput * 9/5 + 32;
  if(fharenheitRes % 1 !=0){
    let roundFhaAns = Math.round(fharenheitRes*10)/10;
    return roundFhaAns;
  }
  return fharenheitRes;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
