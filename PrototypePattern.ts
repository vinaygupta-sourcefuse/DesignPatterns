class CarPrototype {
  constructor(public model: string, public price: number) {}
  
  clone() {
    return new CarPrototype(this.model, this.price);
  }
}


const car1 = new CarPrototype('BMS',1000000);
const car2 = car1.clone();
console.log(car2); // CarPrototype { model: 'BMS', price: 1000000 }

/**
 * Creates new objects by copying an exiting object ( cloning )
 * 
 * Usage : Duplicate object without affecting the original one
 */