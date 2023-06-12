function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return "This one is on me!"
  } else if (ride > 400 && ride <= 2000) {
    return "That will be twenty bucks."
  } else if (ride > 2000 && ride <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(cityname){
  // Write your code here!

  const itworks = cityname === "NYC" ? "Ok, sounds good." : "No go."
  return itworks
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case "generous" :
      message = "Thank you so much.";
      break;
    case "not as generous" :
      message = "Thank you.";
      break;
    default: 
    message = "Bye."
    break;    
  } return message;
}