import { NextFunction, Request, Response } from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction) => next()
const isSeller = (req: Request, res: Response, next: NextFunction) => next()
const isEditor = (req: Request, res: Response, next: NextFunction) => next()

export { isAdmin, isSeller, isEditor }
