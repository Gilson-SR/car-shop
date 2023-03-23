import { Model, models, Schema, model } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;

  constructor(private schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  async get() {
    return this.model.find();
  }

  async getById(id: string) {
    try {
      const body = await this.model.findById(id);
      return body;
    } catch (e) {
      return null;
    }
  }

  async getBy(filter: Partial<T>) {
    return this.model.find(filter);
  }

  async create(body: T) {
    return this.model.create({ ...body });
  }

  async update(id: string, body: Partial<T>) {
    try {
      const updateBody = await this.model.findByIdAndUpdate(id, body, { new: true });
      return updateBody;
    } catch (error) {
      return null;
    }
  }

  async remove(id: string) {
    try {
      await this.model.findByIdAndDelete(id);
      return true;
    } catch (error) {
      return null;
    }
  }
}

export default AbstractODM;