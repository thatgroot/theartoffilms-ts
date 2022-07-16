import { Request, Response } from "express";
import { makeResponse } from "../../@helpers/utils";
import { ProductModel, TaxanomyModel, MediaModel } from "../models";
import fake from '../../@helpers/fake';

class SeedController {

  constructor() {
  }
  async all(req: Request, res: Response) {
    res.status(200).json(makeResponse({}));
  }

  async products(req: Request, res: Response) {
    await ProductModel.insertMany([fake.product]);
    res.status(200).json({ success: true })
  }

  async taxonomies(req: Request, res: Response) {
    await TaxanomyModel.insertMany([fake.taxanomy]);
    res.status(200).json({ success: true })
  }

  async media(req: Request, res: Response) {
    await MediaModel.insertMany([fake.media]);
    res.status(200).json({ success: true })
  }
  async seed(req: Request, res: Response) {
    await ProductModel.insertMany([fake.product]);
    await TaxanomyModel.insertMany([fake.taxanomy]);
    await MediaModel.insertMany([fake.media]);
    res.status(200).json({ success: true })
  }

}


export default SeedController;
