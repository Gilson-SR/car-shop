import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status?: boolean;
  protected id?: string;

  constructor(vehicle: IVehicle) {
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.buyValue = vehicle.buyValue;
    this.status = vehicle.status;
    this.id = vehicle.id;
  }

  public getId() {
    return this.id;
  }

  public setId(v: string) {
    this.id = v;
  }

  public getModel() {
    return this.model;
  }

  public setModel(v: string) {
    this.model = v;
  }

  public getYear() {
    return this.year;
  }

  public setYear(v: number) {
    this.year = v;
  }

  public getColor() {
    return this.color;
  }

  public setColor(v: string) {
    this.color = v;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(v: boolean) {
    this.status = v;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(v: number) {
    this.buyValue = v;
  }
}

export default Vehicle;