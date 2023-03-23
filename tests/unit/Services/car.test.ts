import { describe, afterEach } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('Testa a Service', function () {
  const cars = [
    new Car({
      model: 'Camaro',
      year: 2020,
      color: 'Black',
      buyValue: 101.39,
      doorsQty: 4,
      seatsQty: 5,
      status: false,
      id: '641b49b1a135746a3c3b2909',
    }),
  ];

  const carOutput = new Car({
    model: 'Camaro',
    year: 2020,
    color: 'Black',
    buyValue: 101.39,
    doorsQty: 4,
    seatsQty: 5,
    status: false,
    id: '641b49b1a135746a3c3b2909',
  });

  const car: ICar = {
    model: 'Camaro',
    year: 2020,
    color: 'Black',
    buyValue: 101.39,
    doorsQty: 4,
    seatsQty: 5,
    status: false,
  };

  it('testa incremento de carros', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(car);

    expect(result.message).to.deep.equal(carOutput);
  });

  it('testa se lista todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(cars);

    const service = new CarService();
    const result = await service.get();

    expect(result.message).to.deep.equal(cars);
  });

  it('testa se busca carros por ID', async function () {
    sinon.stub(Model, 'findById').resolves(cars[0]);

    const service = new CarService();
    const result = await service.get('54edb381a13ec9142b9bb353');

    expect(result.message).to.deep.equal(cars[0]);
  });

  it('testa ID inválido', async function () {
    sinon.stub(Model, 'findById').resolves(cars[0]);

    const service = new CarService();
    const result = await service.get('1');

    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });

  afterEach(sinon.restore);
});