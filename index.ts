import Car from "./car/Car";
import FuelType from "./car/FuelType";

const car = new Car.Builder()
    .setCylinders(8)
    .setFuelType(FuelType.ELECTRIC)
    .build();

console.log(`No. of Cylinders: ${car.getCylinders()}`);
console.log(`Fuel Type: ${car.getFuelType()}`);
