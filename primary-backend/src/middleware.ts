import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { JWT_PASSWORD } from "./config";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("reached here")
    const token = req.headers.authorization as unknown as string;
    const payload = jwt.verify(token, JWT_PASSWORD)

    try {
        //@ts-ignore
        req.id = payload.id
        next()
    } catch (e) {
        console.log('e', e);
        return res.status(403).json({
            message:"you are logged in"
        })
    }
}