import { describe, afterEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
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

  it('teste se adiciona motos', async function () {
    sinon.stub(Model, 'create').resolves(motorycles[0]);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    expect(result.message).to.deep.equal(motorycles[0]);
  });

  it('testa se retorna todas motos', async function () {
    sinon.stub(Model, 'find').resolves(motorycles);

    const service = new MotorcycleService();
    const result = await service.get();

    expect(result.message).to.deep.equal(motorycles);
  });

  it('testa se retorna moto por ID', async function () {
    sinon.stub(Model, 'findById').resolves(motorycles[0]);

    const service = new MotorcycleService();
    const result = await service.get('641b5b65100a8a05a3875790');

    expect(result.message).to.deep.equal(motorycles[0]);
  });

  it('testa se retorna erro por ID inválido', async function () {
    sinon.stub(Model, 'findById').resolves(motorycles[0]);

    const service = new MotorcycleService();
    const result = await service.get('1');

    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });

  it('testa se atualiza motos', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorycles[0]);

    const service = new MotorcycleService();
    const result = await service.update('641b5b65100a8a05a3875790', motorcycleInput);

    expect(result.message).to.deep.equal(motorycles[0]);
  });

  it('testa ID inválido na atualização de motos', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorycles[0]);

    const service = new MotorcycleService();
    const result = await service.update('1', motorcycleInput);

    expect(result.message).to.deep.equal({ message: 'Invalid mongo id' });
  });

  afterEach(sinon.restore);
});