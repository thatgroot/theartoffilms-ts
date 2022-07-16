import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { SettingsModel } from '../models/SettingsModel';

class SettingsController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = SettingsModel
  }

  async all(req: Request, res: Response) {
    const settings = await ModelService.all();
    res.status(200).json(makeResponse(settings));
  }
  async create(req: Request, res: Response) {
    const settings = await ModelService.create(req.body);
    res.status(200).json(makeResponse(settings));
  }
  async update(req: Request, res: Response) {
    const settings = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ settings });
  }
  async show(req: Request, res: Response) {
    const settings = await ModelService.show(req.params.id);
    res.status(200).json({ settings });
  }
  async destroy(req: Request, res: Response) {
    const settings = await ModelService.delete(req.params.id);
    res.status(200).json({ settings });
  }


}

export default SettingsController;
