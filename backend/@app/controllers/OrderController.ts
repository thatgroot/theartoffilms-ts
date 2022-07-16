import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { OrderModel } from '../models/OrderModel';

class OrderController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = OrderModel
  }

  async all(req: Request, res: Response) {
    const orders = await ModelService.all();
    res.status(200).json(makeResponse(orders));
  }
  async create(req: Request, res: Response) {
    const order = await ModelService.create(req.body);
    res.status(200).json(makeResponse(order));
  }
  async update(req: Request, res: Response) {
    const order = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ order });
  }
  async show(req: Request, res: Response) {
    const order = await ModelService.show(req.params.id);
    res.status(200).json({ order });
  }
  async destroy(req: Request, res: Response) {
    const order = await ModelService.delete(req.params.id);
    res.status(200).json({ order });
  }


}

export default OrderController;
