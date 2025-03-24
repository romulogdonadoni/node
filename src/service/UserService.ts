import { User } from "../model/User";

let users: User[] = [
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "João", age: 30 },
    { id: 3, name: "Paula", age: 20 },
];

export function getAll(): User[] {
    return users;
}

export function getById(id: number): User | undefined {
    return users.find(p => p.id === id);
}

export function add(user: User): User {
    users.push(user);
    return user;
}

export function remove(id: number): boolean {
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return false;
    }

    users.splice(index, -1);

    return false;
}