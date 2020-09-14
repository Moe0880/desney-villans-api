const express = require("express");
const bodyParser = require("body-parser");
const villains = require("./villains");
const {
  getAllVillains,
  getVillainsBySlug,
  createNewVillain,
} = require("./controllers/villains");
const app = express();

app.get("/villains", getAllVillains);

app.get("/villains/:slug", getVillainsBySlug);

app.post("/villains", bodyParser.json(), createNewVillain);

app.listen(1337, () => {
  console.log("listen on port 1337..."); // eslint-disable-line no-console
});
