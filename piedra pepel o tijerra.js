var papel = "papel";
var piedra = "piedra";
var tijeras = "tijeras";
var winMessagge = "You Win";
var loseMessage = "You Lose";

function play(cpu, player) {
  if (player == cpu) {
    return "Tight";
  } else if (cpu == piedra && player == papel) {
    return winMessagge;
  } else if (cpu == papel && player == tijeras) {
    return winMessagge;
  } else if (cpu == tijeras && player == piedra) {
    return winMessagge;
  } else return loseMessage;
}
/*
function play(cpu, player) {
  if (player == cpu) {
    return "Tight";
  } else if (cpu == piedra && player == papel) {
    return winMessagge;
  } else if (cpu == piedra && player == tijeras) {
    return loseMessage;
  } else if (cpu == papel && player == piedra) {
    return loseMessage;
  } else if (cpu == papel && player == tijeras) {
    return winMessagge;
  } else if (cpu == tijeras && player == piedra) {
    return winMessagge;
  } else return loseMessage;
}
*/

/**
 cpu player
piedra papel
piedra tijera
papel piedra
papel tijera
tijera piedra
tijera papel 
*/
