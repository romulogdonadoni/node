import express from "express";
import cors from "cors";
import { createUser, getUser, listUser, removeUser } from "./controller/UserController";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/user", listUser);
app.get("/user/:id", getUser);
app.post("/user", createUser);
app.delete("/user/:id", removeUser);

const PORT = 3000;

app.listen(PORT, () =: {
    console.log(`Server is running on ${PORT}`)
})