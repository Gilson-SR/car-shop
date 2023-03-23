import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status?: boolean;
  protected id?: string;
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
    this.status = motorcycle.status;
    this.id = motorcycle.id;
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

  public getCategory() {
    return this.category;
  }

  public setCategory(v: string) {
    this.category = v;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(v: number) {
    this.engineCapacity = v;
  }
}

export default Motorcycle;