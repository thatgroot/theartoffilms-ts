import { Application, Router } from "express";
import { Controller } from '../@app/controllers/Controller';
export const hasError = (data: any) => {
  return "errors" in data;
};

/**
 *
 * [data] a mongoose response , filtered and contains either an entity or errors object
 * @param data
 * @returns
 */
export const makeResponse = (data: any) => {
  if (hasError(data)) {
    return { errors: data.errors };
  } else {
    return { data };
  }
};

export const makeRouter = (controller: Controller) => {
  const router = Router()

  const { all, create, update, show, destroy, } = controller;
  router.get("/", all)
    .post("/", create)
    .put("/:id", update)
    .get("/:id", show)
    .delete("/:id", destroy)
    .use((req, res) => {
      res.status(404).send("Not Found");
    }).use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });
  return router;
}

export const makeRouteV1 = (entity: string) => `/api/v1/${entity}`;

export const makeUseApiV1 = (app: Application, entity: string, router: Router) => app.use(makeRouteV1(entity), router)
