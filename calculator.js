function calculateDA() {
  var sex = document.getElementById("sex").value;
  var BW = document.getElementById("bw").value;
  var goal = document.getElementById("goal").value;
  
  
  if (BW === "" || BW <= 1) {
    BW = 0;
    document.getElementById("grams").style.display = "none";
  } else {
    document.getElementById("grams").style.display = "block";
  }
  
  if ( sex === "male" || goal === "maintain"){
  var DI = BW * 0.8;
  }
  
  if ( sex === "male" && goal === "gain"){
  var DI = BW * 1.2;
  }
  
  if ( sex === "male" && goal === "maximumgain"){
  var DI = BW * 1.5;
  }
  
  if ( sex === "female" && goal === "maintain"){
  var DI = BW * 0.8;
  }
  
  if ( sex === "female" && goal === "maintain"){
  var DI = BW * 1;
  }
  
  if ( sex === "female" && goal === "gain"){
  var DI = BW * 1.2;
  }
  
  var dailyamount = DI;
  
  document.getElementById("d-amount").style.display = "block";
  document.getElementById("amount").innerHTML = dailyamount;
  
}




function calculateWC() {
  
  var bodyclass = "";
  document.getElementById("form");
  var BW = document.getElementById("bw").value;
  var sex = document.getElementById("sex").value;
  
  
  if ((sex == "male")){
  if ((BW <= 143)){
    bodyclass= 'Bantamweight';
  }
  }
  
  if (sex == "male"){
  if (BW > 143 && BW <= 154){
    bodyclass= 'Lightweight';
  }
  }
  
  if (sex == "male"){
  if (BW > 154 && BW <= 176){
    bodyclass= 'Middleweight';
  }
  }
  
  if (sex == "male"){
  if (BW > 154 && BW <= 176){
    bodyclass= 'Middleweight';
  }
  }
  
  if (sex == "male"){
  if (BW > 176 && BW <= 198){
    bodyclass= 'Light Heavyweight';
  }
  }
  
  if (sex == "male"){
  if (BW > 198 && BW <= 225){
    bodyclass= 'Heavyweight';
  }
  }
  
  if (sex == "male"){
  if (BW > 225 && BW <= 300){
    bodyclass= 'Super Heavyweight';
  }
  }
  
  if (sex == "female"){
  if (BW <= 125){
    bodyclass= 'Lightweight';
  }
  }
  
  if (sex == "female"){
  if (BW > 125 && BW <= 140){
    bodyclass= 'Middleweight';
  }
  }
  
  if (sex == "female"){
  if (BW > 140 && BW <= 200){
    bodyclass= 'Heavyweight';
  }
  }
  
  var WC = bodyclass;
   document.getElementById("outerbody").style.display = "block";
  document.getElementById("bodyclass").innerHTML = WC;
  
}




document.getElementById("submit").onclick = function() { 
  calculateWC();
  calculateDA();
};


