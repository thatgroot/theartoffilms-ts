import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { SettingsModel } from '../models/SettingsModel';
import { SubscriptionModel } from '../models/SubscriptionModel';

class SubscriptionController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = SubscriptionModel
  }

  async all(req: Request, res: Response) {
    const subscriptions = await ModelService.all();
    res.status(200).json(makeResponse(subscriptions));
  }
  async create(req: Request, res: Response) {
    const subscription = await ModelService.create(req.body);
    res.status(200).json(makeResponse(subscription));
  }
  async update(req: Request, res: Response) {
    const subscription = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ subscription });
  }
  async show(req: Request, res: Response) {
    const subscription = await ModelService.show(req.params.id);
    res.status(200).json({ subscription });
  }
  async destroy(req: Request, res: Response) {
    const subscription = await ModelService.delete(req.params.id);
    res.status(200).json({ subscription });
  }


}

export default SubscriptionController;
