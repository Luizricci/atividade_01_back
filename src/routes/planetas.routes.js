import { Router } from "express";
const filmesRoutes = Router();

const filmesMarcantes = [
  {
    id: 1001,
    titulo: "Hero",
    genero: "animação",
    emCartaz: false,
  },
  {
    id: 1002,
    titulo: "harry potter",
    genero: "ficção",
    emCartaz: false,
  },
  {
    id: 1003,
    titulo: "divertidamente 2",
    genero: "ficção",
    emCartaz: true,
  },
];
filmesRoutes.get("/", (req, res) => {
  return res.status(200).json(filmesMarcantes);
});

export default filmesRoutes;