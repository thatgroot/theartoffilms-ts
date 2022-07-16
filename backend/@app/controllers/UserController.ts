import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import ModelService from "../services/ModelService";
import { Controller } from "./Controller";
import { SettingsModel } from '../models/SettingsModel';

class UserController implements Controller {
  service = new ModelService()
  constructor() {
    ModelService.model = SettingsModel
  }

  async all(req: Request, res: Response) {
    const users = await ModelService.all();
    res.status(200).json(makeResponse(users));
  }
  async create(req: Request, res: Response) {
    const user = await ModelService.create(req.body);
    res.status(200).json(makeResponse(user));
  }
  async update(req: Request, res: Response) {
    const user = await ModelService.update(req.params.id, req.body);
    res.status(200).json({ user });
  }
  async show(req: Request, res: Response) {
    const user = await ModelService.show(req.params.id);
    res.status(200).json({ user });
  }
  async destroy(req: Request, res: Response) {
    const user = await ModelService.delete(req.params.id);
    res.status(200).json({ user });
  }


}

export default UserController;
