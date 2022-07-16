import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { MessageModel } from '../models/MessageModel';

class MessageController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = MessageModel
  }

  async all(req: Request, res: Response) {
    const messages = await ModelService.all();
    res.status(200).json(makeResponse(messages));
  }
  async create(req: Request, res: Response) {
    const support = await ModelService.create(req.body);
    res.status(200).json(makeResponse(support));
  }
  async update(req: Request, res: Response) {
    const support = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ support });
  }
  async show(req: Request, res: Response) {
    const support = await ModelService.show(req.params.id);
    res.status(200).json({ support });
  }
  async destroy(req: Request, res: Response) {
    const support = await ModelService.delete(req.params.id);
    res.status(200).json({ support });
  }


}

export default MessageController;
