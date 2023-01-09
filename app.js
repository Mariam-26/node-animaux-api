const express = require("express"); /*RECUPERATION DES DEPENDANCES EXPRESS*/ 
const { success } = require("./helper.js");
// let animaux = require("./animal.js");


const app = express(); /*JE CREE UNE INSTANCE DE L'APPLICATION EXPESS*/
const port = 8000; /*AFFECTATION DE LA CONSTANTE PORT*/
app.get(
  /*GET => méthode le requête*/ "/" /*/ => chemin de la requête (root) */,
  (req /*REQ => requête*/, res /*RES => réponse*/) =>
    res.send(
      /*SEND => renvoi la requête au client*/ "Hello Express 👌" /* fonction qui fournit la requête au client*/
    )
); /*DIFINITION DE POINT DE TERMINAISON (💗 de l'Express*/

app.get("/api/animaux/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animaux.find((animal) => animal.id === id);
  const message = 'Un animal a bien été trouvé.'
  res.json(success(message, animal));
}); /* NOUVEAU POINT DE TERMINAISON (nouvelle root)*/



const animaux = [
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: ["Plante", "Poisson"],
    created: new Date(),
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
    created: new Date(),
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: ["Eau"],
    created: new Date(),
  },

  // {
  //   id: 4,
  //   name: "Aspicot",
  //   hp: 16,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 5,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 6,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 7,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 8,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 9,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 10,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 11,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
  // {
  //   id: 12,
  //   name: "Bulbizarre",
  //   hp: 25,
  //   cp: 5,
  //   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   types: ["Plante", "Poisson"],
  //   created: new Date(),
  // },
];


// LE NOUVEAU POINT DE TERMINAIDON? AFFICHANT LE TOTAL POUR KE MOMENT
app.get("/api/animaux", (req, res) => {
  res.send(`Il y'a ${animaux.length} animaux dans animapark pour le moment.`);
});

app.listen(port, () =>
  console.log(`Mon appli Node est démarrée sur : http://localhost:${port}`)
); /*DEMARRAGE DE L'APPLI SUR LOCALHOST*/
