import { Request, Response } from "express"
import { getAll } from "../service/UserService";
import { User } from "../model/User";

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
    const { id, name, age } = req.body;

    if (!id || !name || !age) {
        res.status(400).json({ error: "Some fields are missing in the request body (id, name, age)." })
    } else {
        const newUser: User = { id, name, age };
        add(newUser);
        res.status(201).json(newUser);
    }
}