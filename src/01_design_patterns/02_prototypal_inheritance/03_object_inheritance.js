/*
In this execise we will create and explore prototypal relashionships between objects.
Prototypal Chain Overview:
- Vehicle serves as the "root" prototype object.
- Car inherits properties and methods from Vehicle.
- ToyotaSupra inherits properties and methods from Car, which in turn inherits from Vehicle.
- CustomSupra inherits properties and methods from ToyotaSupra, which in turn inherits from Car and Vehicle.
- MotorBike inherits properties and methods from Vehicle.

The Prototypal Inheritance Chain looks like this:
          Vehicle
         /       \
       Car      MotorBike
      /
ToyotaSupra
      \
   CustomSupra
*/

// TODOS:
// 1. Complete the objects to make all the test pass
// 2. Use the debugger to understand the prototype chain

// TODO: Inspect the "Abstract" Vehicle Object
const Vehicle = {
    name: "Vehicle",
    model: "Generic",
    color: "blue",
    wheels: 0,
    engine: "V2",
    passengers: 0,
    fuelType: "Petrol",
    mileage: 0,
    maxSpeed: 0,
    isParked: true,
    fuelLevel: 100,  // a percentage
    drive: function() {
        this.isParked = false;
        return `The ${this.engine} Started!`;
    },
    break: function() {
        this.isParked = true;
        return `The ${this.engine} Stopped!`;
    },
    start: function() {
        this.isParked = false;
        return "Vehicle started.";
    },
    park: function() {
        this.isParked = true;
        return "Vehicle parked.";
    },
    refuel: function(amount) {
        this.fuelLevel = Math.min(100, this.fuelLevel + amount);
        return `Fuel level: ${this.fuelLevel}%`;
    }
};


const Car = Object.create(Vehicle);

Car.wheels = 4;
Car.engine = "V6";
Car.passengers = 4;
Car.trunkSpace = 400;  // New Property, trunk space in liters

// TODO: Create a ToyotaSupra object that inherits from the Car object
const ToyotaSupra = Object.create(Car);

// TODO: Set the 'name' property of the ToyotaSupra object to "Toyota"
ToyotaSupra.name = "Toyota";

// TODO: Set the 'model' property of the ToyotaSupra object to "Supra"
ToyotaSupra.model = "Supra";

// TODO: Set the 'maxSpeed' property of the ToyotaSupra object to 250
ToyotaSupra.maxSpeed = 250;

// TODO: Set the 'turbo' property of the ToyotaSupra object to true
ToyotaSupra.turbo = true;

// TODO: Create a CustomSupra object that inherits from ToyotaSupra
const CustomSupra = Object.create(ToyotaSupra);

// TODO: Customize the CustomSupra object
// For example, you could change its maxSpeed, add custom properties, or even methods.
CustomSupra.maxSpeed = 270;  // Increase max speed
CustomSupra.customPaint = "Metallic Red";  // Add a custom paint job

// TODO: Optionally, add new methods to CustomSupra
CustomSupra.showOff = function() {
return "Look at my custom paint and faster speed!";
};

// Example 2. MotorBike Object
// MotorBike Object
const MotorBike = Object.create(Vehicle);

MotorBike.name = "Honda";
MotorBike.model = "CBR 600";
MotorBike.wheels = 2;
MotorBike.engine = "inline 4";
MotorBike.passengers = 2;
MotorBike.sidecar = false; // New Property, indicates if the motorbike has a sidecar
MotorBike.wheelie = function() {  // New Method
    return "Doing a wheelie!";
};

// Don't touch this code
module.exports = {
    Vehicle,
    Car,
    ToyotaSupra,
    CustomSupra,
    MotorBike
}