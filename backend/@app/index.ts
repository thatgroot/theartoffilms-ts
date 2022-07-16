import express, { Router } from "express";
import { json, urlencoded } from "body-parser";
import { api_router, product_router, seed_router } from "../routes/api";
import { makeUseApiV1 } from '../@helpers/utils';

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }
  // Configure Express middleware.
  private middleware(): void {
    this.express.use(json());
    this.express.use(urlencoded({ extended: false }));

  }

  private routes(): void {
    const { express: app } = this
    makeUseApiV1(app, "seed", seed_router)
    makeUseApiV1(app, "products", product_router)
    makeUseApiV1(app, "", api_router)
  }

}

export default new App().express;
