import { Router } from 'express';
import ProductController from '../../@app/controllers/ProductController';
import { isAdmin, isSeller } from '../../@app/middlewares/web';
import { makeResponse } from '../../@helpers/utils';

const product_controller = new ProductController()
const product_router = Router();
const { all, create, update, show, destroy, } = product_controller;

product_router.get("/", isAdmin, all)
 .post("/", isSeller, create)
 .put("/:id", isSeller, update)
 .get("/:id", show)
 .delete("/:id", isSeller, destroy).use("*", (req, res, next) => {
  res.status(200).jsonp(makeResponse({ "message": "not a route" }));
 });

export default product_router;
