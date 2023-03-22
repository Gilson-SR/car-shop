import ICar from '../Interfaces/ICar';

class Car {
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected status?: boolean;
  protected id?: string;

  constructor(car: ICar) {
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.status = car.status;
    this.id = car.id;
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

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(v: number) {
    this.doorsQty = v;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }

  public setSeatsQty(v: number) {
    this.seatsQty = v;
  }
}

export default Car;