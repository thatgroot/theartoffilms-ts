import { Model } from "mongoose";
import fake from "../../@helpers/fake";
import { Product } from "../../@types";
import Filter from '../../@helpers/filter';

class ModelService {

  static model: Model<any, {}, {}, {}>;

  static async all() {
    const data = await Filter.findAll(ModelService.model);
    return Promise.all(data);
  }

  static async create(data: any): Promise<any> {
    try {
      const document = await ModelService.model.create(fake.product);
      const data = Filter.filter([document]);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async update(id: string, data: Product): Promise<any> {
    return fake.product;
  }

  static async show(id: string): Promise<Product> {
    return fake.product;
  }

  static async delete(id: string): Promise<Product> {
    return fake.product;
  }
}

export default ModelService;
