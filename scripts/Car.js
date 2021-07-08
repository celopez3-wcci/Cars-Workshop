class Car {
    constructor(){
      this.speed = 0;
      this.engineHealth = 100;
      this.frictionIntervalID = undefined;
    }

    startFriction(){
      if(this.frictionIntervalID == undefined){
        this.frictionIntervalID = self.setInterval(this.slowDown, 1000);
      }
    }

    startCruiseControl(){
      clearInterval(this.frictionIntervalID);
      this.frictionIntervalID = undefined;
    }

    accelerate(){
      if(this.speed >= 170){
        this.speed = 170;
      }else{
        this.speed+=10;
        if(this.speed >= 130){
          this.engineHealth-=50;
        }
      }
    }

    slowDown = () => {
      if(this.speed > 0){
        this.speed-=1;
      }
    }

    brake(){
      if(this.speed <= 0){
        this.speed = 0;
      }else{
        this.speed-=10;
      }

      if(this.frictionIntervalID == undefined){
        this.startFriction();
      }
    }


    getSpeed(){
      return this.speed;
    }

    getEngineHealth(){
      return this.engineHealth;
    }

}