import { NextFunction, Request, Response } from "express";


export function admin(req: Request, res: Response, next: NextFunction) {
    const admin = true;

    if (admin) return next();

    res.status(401).json({
        error: 'Usuário não autotizado'
    });
}