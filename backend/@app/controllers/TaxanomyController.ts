import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { SettingsModel } from '../models/SettingsModel';

class TaxanomyController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = SettingsModel
  }

  async all(req: Request, res: Response) {
    const taxanomies = await ModelService.all();
    res.status(200).json(makeResponse(taxanomies));
  }
  async create(req: Request, res: Response) {
    const taxanomy = await ModelService.create(req.body);
    res.status(200).json(makeResponse(taxanomy));
  }
  async update(req: Request, res: Response) {
    const taxanomy = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ taxanomy });
  }
  async show(req: Request, res: Response) {
    const taxanomy = await ModelService.show(req.params.id);
    res.status(200).json({ taxanomy });
  }
  async destroy(req: Request, res: Response) {
    const taxanomy = await ModelService.delete(req.params.id);
    res.status(200).json({ taxanomy });
  }


}

export default TaxanomyController;
