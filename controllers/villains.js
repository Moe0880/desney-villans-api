const villains = require("../villains");
const { response } = require("express");
const models = require("../models");

const getAllVillains = async (req, res) => {
  const villains = await models.villains.findAll();
  return res.send(villains);
};

const getVillainsBySlug = async (req, res) => {
  const { slug } = req.params;
  const foundVillain = await models.villains.findOne({ where: { slug: slug } });
  return res.send(foundVillain);
};

const createNewVillain = async (req, res) => {
  console.log("starting to create new villan");
  const { name, movie, slug } = req.body;
  if (!name || !movie || !slug) {
    return res
      .status(400)
      .send(
        "The following fields are required: name, realname, firstappearance, slug"
      );
  }

  const newVillain = await models.villains.create({
    name,
    movie,
    slug,
  });
  //console.log({ newVillain });
  return res.status(201).send(newVillain);
};

module.exports = { getAllVillains, getVillainsBySlug, createNewVillain };
