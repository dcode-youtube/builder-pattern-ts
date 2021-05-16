import FuelType from "./FuelType";

export default class Car {
    private cylinders: number;
    private fuelType: FuelType;

    private constructor(builder: typeof Car.Builder.prototype) {
        this.cylinders = builder.getCylinders();
        this.fuelType = builder.getFuelType();
    }

    public getCylinders() {
        return this.cylinders;
    }

    public getFuelType() {
        return this.fuelType;
    }

    static Builder = class {
        private cylinders: number = 4;
        private fuelType: FuelType = FuelType.PETROL;

        public getCylinders() {
            return this.cylinders;
        }

        public setCylinders(cylinders: number) {
            if (![0, 4, 6, 8, 10, 12].includes(cylinders)) {
                throw new Error("Invalid number of cylinders.");
            }

            this.cylinders = cylinders;

            return this;
        }
    
        public getFuelType() {
            return this.fuelType;
        }

        public setFuelType(fuelType: FuelType) {
            this.fuelType = fuelType;

            return this;
        }

        public build() {
            if (this.getCylinders() > 0 && this.getFuelType() === FuelType.ELECTRIC) {
                throw new Error("Electric cars cannot have cylinders");
            }

            return new Car(this);
        }
    }
}