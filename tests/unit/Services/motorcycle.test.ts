import { describe, afterEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcyclesService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Teste de MotorycleService', () => {
  const motorcycleInput: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
    status: true,
  };

  const motorycles = [
    new Motorcycle({
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
      status: true,
      id: '641b5b65100a8a05a3875790',
    }),
  ];

  it('teste de criação motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(motorycles[0]);

    const service = new MotorcyclesService();
    const result = await service.create(motorcycleInput);

    expect(result.message).to.deep.equal(motorycles[0]);
  });

  afterEach(sinon.restore);
});