const goFastBtn = document.getElementsByClassName("floorboard__accelerator")[0];

const stopBtn = document.getElementsByClassName("floorboard__brake")[0];

const cruiseBtn = document.getElementsByClassName("floorboard__cruise")[0];

const checkEngineLight = document.getElementsByClassName("dashboard__check-engine-light")[0];

const speedometerDiv = document.getElementById("speedometer");

let refreshIntervalID = setInterval(updateDashboard, 1000);

const myCar = new Car();
myCar.startFriction();

goFastBtn.addEventListener("click", function(){
 myCar.accelerate();
 //speedometerDiv.innerText = myCar.getSpeed();
 if(myCar.getEngineHealth() <= 50){
   checkEngineLight.innerText = "Check Engine";
 }
});

stopBtn.addEventListener("click", function(){
  myCar.brake();
  //speedometerDiv.innerText = myCar.getSpeed();
});

cruiseBtn.addEventListener("click", function(){
  myCar.startCruiseControl();
});

function updateDashboard(){
  speedometerDiv.innerText = myCar.getSpeed();
}
