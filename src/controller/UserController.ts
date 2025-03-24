import { Request, Response } from "express"
import { getAll } from "../service/UserService";

export function listUser(req: Request, res: Response): void {
    const list = getAll();
    res.status(200).json(list);

}

export function getUser(req: Request, res: Response): void {
    if (!user) {
        res.status(404).json({ error: "User not found" });
    } else {
        res.status(200).json(user);
    }
}

export function createUser(req: Request, res: Response): void {
    onst { id, name, age } = req.body
}