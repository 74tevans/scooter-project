class Scooter {
  #serial;
  static #nextSerial = 1;
  constructor(station){
    this.station = station;
    this.user = null;
    this.#serial = Scooter.#nextSerial;
    Scooter.#nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  getSerial(){
    return this.#serial;
  }

  rent(user){
    if (this.charge > 20 && !(this.isBroken)){
      this.station = null;
      this.user = user;
    }
    else if (this.charge <= 20){
      throw new Error(`Scooter #${this.getSerial()} needs to charge`);
    }
    else if (this.isBroken){
      throw new Error(`Scooter #${this.getSerial()} needs repair`);
    }
  }

  dock(station){
    this.station = station;
    this.user = null;
    console.log(`Scooter #${this.getSerial()} is docked at ${this.station}`);
  }

  async recharge(){
    console.log('Starting charge');
    await new Promise(resolve => setInterval(resolve, 1000));
    if ((this.charge + 10) > 100){
      this.charge = 100;
      console.log('Charge complete');
      clearInterval(Promise);
    }
    else {
      this.charge += 10;
    }
    console.log(`Charge is at ${this.charge}%`);
  }

  async requestRepair() {
    console.log('Requested repair');
    await new Promise(resolve => setTimeout(resolve, 5000));
    this.isBroken = false;
    console.log('Repair complete');   
  }
}

module.exports = Scooter;
