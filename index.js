/*
// if...else

havo = -15;
if (havo >= 20) {
  console.log("Bugun havo issiq");
} else if (havo < 20 && havo > 0) {
  console.log("Bugun havo iliq");
} else if (havo <= 0) {
  console.log("Bugun havo sovuq");
}
*/

/*
// switch ...case
iqlim = `buronli`;

switch(iqlim){
  case "issiq": console.log("Kun issiq"); break;
  case "iliq": console.log("Kun iliq"); break;
  case "sovuq": console.log("Kun sovuq"); break;
  default: console.log("Bunaqa ob-havo yo'q");
}
*/

// Uy ishi 

// baholash tizimi

// 100 - 95 -> A+
// 94 - 90 -> A
// 89 - 85 -> B+
// 84 - 80 -> B
// 79 - 75 -> C+
// 74 - 70 -> C
// 69 - 65 -> D+
// 64 - 60 -> D

score = 34;

if (score <= 100 && score >= 95) {
  console.log("Your score: A+");
} else if (score <= 94 && score >= 90) {
  console.log("Your score: A");
} else if (score <= 89 && score >= 85) {
  console.log("Your score: B+"); 
} else if (score <= 84 && score >= 80) {
  console.log("Your score: B");
} else if (score <= 79 && score >= 75) {
  console.log("Your score: C+");
} else if (score <= 74 && score >= 70) {
  console.log("Your score: C");
} else if (score <= 69 && score >= 65) {
  console.log("Your score: D+");
} else if (score <= 64 && score >= 60) {
  console.log("Your score: D");
} else {
  console.log("Your score: F. You failed, sorry!");
}