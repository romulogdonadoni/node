import { Request, Response } from "express"
import { getAll } from "../service/UserService";

export function listUser(req: Request, res: Response): void {
    const list = getAll();
    res.status(200).json(list);

}

export function getUser(req: Request, res: Response): void {
    if (!user) {

    }
}