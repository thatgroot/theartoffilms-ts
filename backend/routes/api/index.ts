import { Router } from "express";
import product_router from "./product"
import seed_router from "./seed";

const api_router = Router();

api_router.get("/", (req, res) => {
 res.status(200).json({ message: "welcome to multea" })
}).use("*", (req, res) => {
 res.status(200).json({
  message: "not a route"
 });
});
export { product_router, seed_router, api_router };
