import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import { Controller } from "./Controller";
import ModelService from '../services/ModelService';
import { ProductModel } from '../models/ProductModel';

class ProductController extends Controller {

  constructor() {
    super()
    ModelService.model = ProductModel
  }

  async all(req: Request, res: Response) {
    const products = await ModelService.all();
    res.status(200).json(makeResponse(products));
  }
  async create(req: Request, res: Response) {
    const product = await ModelService.create(req.body);
    res.status(200).json(makeResponse(product));
  }
  async update(req: Request, res: Response) {
    const product = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ product });
  }
  async show(req: Request, res: Response) {
    const product = await ModelService.show(req.params.id);
    res.status(200).json({ product });
  }
  async destroy(req: Request, res: Response) {
    const product = await ModelService.delete(req.params.id);
    res.status(200).json({ product });
  }


}

export default ProductController;
