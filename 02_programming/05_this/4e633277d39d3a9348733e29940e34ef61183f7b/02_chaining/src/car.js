// Complete and add needed car properties:
const car = {
  speed: 0,
  distance: 0,
  start: function () {
    this.speed = 0;
    this.distance=0;
    return this;
  },
  changeSpeed(speedToSet){
    this.speed = speedToSet;
    return this;
  },
  drive(minutes){
    this.distance=this.distance+(minutes/60)*this.speed;
    return this;
  },
  showDistance(){
    console.log(this.distance + " Km");
    return this;
  }
};

module.exports = car;
