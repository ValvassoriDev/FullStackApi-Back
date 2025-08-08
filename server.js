import express from "express";
import { data } from "react-router-dom";
import pkg from "@prisma/client";
import cors from 'cors'

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();

app.use(cors())
app.use(express.json());

app.post("/users", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

app.put("/users/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

app.get("/users", async (req, res) => {
  try {
    const { name, email, age } = req.query;

    const filters = {};

    if (name) filters.name = name;
    if (email) filters.email = email;
    if (age) filters.age = Number(age); // sempre converta para número

    const users = await prisma.user.findMany({
      where: filters,
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(201).json({ message: "Usuário deletado com sucesso!" });
});

app.listen(3000);
