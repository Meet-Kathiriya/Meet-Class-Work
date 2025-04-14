class Vehical {
    constructor() {

        this.stat = 'Gujrat';
        this.stat2 = 'Delhi';
        this.number = 10;
        this.number2 = 15;
        this.year = 2024

    }
    
    vehical() {
        document.write("Vehical")
    }
}

// Car
class Car extends Vehical {
    constructor(stat) {
        super(stat);
    }
    name() {
        document.write(`<br>This car is from ${this.stat} & it's state code ${this.number}`)
    }
}

class Mercedes extends Car {
    mercedes() {
        document.write("<br>This is Mercedes's GLA")
    }
}

class GLA extends Mercedes {
    model() {
        document.write(`<br>This GLA's model is from year ${this.year}`)
    }
}
// Car


// Bike
class Bike extends Vehical {
    name() {
        document.write(`<br>This Bike is From ${this.stat2} & it's state code ${this.number2}`);
    }
}

class Honda extends Bike {
    honda() {
        document.write("<br>This is Honda's DLX");
    }
}

class DLX extends Honda {

    model() {
        document.write(`<br>This DLX's model is from year ${this.year}`)
    }
}
// Bike

let obj = new GLA();
obj.vehical();
obj.mercedes();
obj.name();
obj.model();
let obj2 = new DLX();
obj2.honda()
obj2.name();
obj2.model();

// END