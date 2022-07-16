import { NextFunction, Request, Response } from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
 next();
}
const isSeller = (req: Request, res: Response, next: NextFunction) => false
const isEditor = (req: Request, res: Response, next: NextFunction) => false

export { isAdmin, isSeller, isEditor }
