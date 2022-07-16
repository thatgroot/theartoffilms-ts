import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { MediaModel } from '../models/MediaModel';

class MediaController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = MediaModel
  }

  async all(req: Request, res: Response) {
    const media = await ModelService.all();
    res.status(200).json(makeResponse(media));
  }
  async create(req: Request, res: Response) {
    const media = await ModelService.create(req.body);
    res.status(200).json(makeResponse(media));
  }
  async update(req: Request, res: Response) {
    const media = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ media });
  }
  async show(req: Request, res: Response) {
    const media = await ModelService.show(req.params.id);
    res.status(200).json({ media });
  }
  async destroy(req: Request, res: Response) {
    const media = await ModelService.delete(req.params.id);
    res.status(200).json({ media });
  }


}

export default MediaController;
