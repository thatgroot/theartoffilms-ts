import { Request, Response } from "express";
import ModelService from '../services/ModelService';

export abstract class Controller {

  public service = new ModelService()

  all(req: Request, res: Response) {

  };
  create(req: Request, res: Response) {

  };
  update(req: Request, res: Response) {

  };
  show(req: Request, res: Response) {

  }

  destroy(req: Request, res: Response) {

  }
}
