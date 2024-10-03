import { response, Router } from "express";
const planetasRoutes = Router();

let planetas = [
{
    id: Number(Math.floor(Math.random() * 9999999999)),
    nome: "Dev",
    temperatura: 27.0,
    agua: false, //indica se a planeta tem água ou não
    atm: ["JS", "React", "html", "VS"],

}
];

// rota para busca todos os itens do array planetas
planetasRoutes.get("/", (req, res) => {
return res.status(200).json(planetas);
});

// rota para criar um novo item no array planetas
planetasRoutes.post("/", (req, res) => {
const { nome, temperatura, agua, atm } = req.body;
const novoPlaneta = {
    id: planetas.length + 1,
    nome: nome,
    temperatura: temperatura,
    agua: agua,
    atm: atm,
};
planetas.push(novoPlaneta);
return res.status(201).json(planetas);
});

//rota para buscar um elemento especifico do array planetas
planetasRoutes.get("/:id", (req, res) => {
const { id } = req.params;

  //console.log(id);

const planeta = planetas.find((planet) => planet.id === Number(id));
console.log(planeta);

if (!planeta) {
    return res.status(404).send({ message: "planeta não encontrado!!!!!!!" });
}

return res.status(200).send(planeta);
});

//rota para editar um planeta
planetasRoutes.put("/:id", (req, res) => {
const { id } = req.params;

const planeta = planetas.find((planet) => planet.id === Number(id));
console.log(planeta);

if (!planeta) {
    return res.status(404).send({ message: "planeta não encontrado!!!!!!!" });
}

const { nome, temperatura, agua, atm } = req.body;

planeta.nome = nome;
planeta.temperatura = temperatura;
planeta.agua = agua;
planeta.atm = atm;

return res.status(200).send({
    message: "planeta atualizado !!!!!!",
    planeta,
});
});

// rota para deletar uma planeta
planetasRoutes.delete("/:id", (req, res) => {
const { id } = req.params;


const planeta = planetas.find((planet) => planet.id === Number(id));
console.log(planeta);

if (!planeta) {
    return res.status(404).send({ message: "planeta não encontrado!!!!!!!" });
}

planetas = planetas.filter((planet) => planet.id !== Number(id));

return res.status(200).send({
    message: "planeta deletado",
    planeta,
})
});

export default planetasRoutes;