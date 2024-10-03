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

const guloseima = planetas.find((doce) => doce.id === Number(id));
console.log(guloseima);

if (!guloseima) {
    return res.status(404).send({ message: "guloseima não encontrada!!!!!!!" });
}

return res.status(200).send(guloseima);
});

//rota para editar uma guloseima
planetasRoutes.put("/:id", (req, res) => {
const { id } = req.params;

const guloseima = planetas.find((doce) => doce.id === Number(id));
console.log(guloseima);

if (!guloseima) {
    return res.status(404).send({ message: "guloseima não encontrada!!!!!!!" });
}

const { nome, preco } = req.body;

guloseima.nome = nome;
guloseima.preco = preco;

return res.status(200).send({
    message: "Guloseima atualizada !!!!!!",
    guloseima,
});
});

// rota para deletar uma guloseima
planetasRoutes.delete("/:id", (req, res) => {
const { id } = req.params;


const guloseima = planetas.find((doce) => doce.id === Number(id));
console.log(guloseima);

if (!guloseima) {
    return res.status(404).send({ message: "guloseima não encontrada!!!!!!!" });
}

planetas = planetas.filter((doce) => doce.id !== Number(id));

return res.status(200).send({
    message: "guloseima deletada",
    guloseima,
})
});

export default planetasRoutes;