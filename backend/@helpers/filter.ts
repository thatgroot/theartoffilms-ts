import { Document, Model } from "mongoose";
import { Product } from '../@types/index';

class Filter {
  static async findAll<T>(model: Model<any, {}, {}, {}>) {
    const entityQuery = await model.find().lean();
    const entities = Filter.filter(entityQuery);
    return entities;
  }

  static async filter(query: any[]) {
    const entities = query.map(({ _id, ...entity }) => entity);
    return entities;
  }
}
export default Filter;
