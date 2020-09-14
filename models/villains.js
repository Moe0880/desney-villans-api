const villains = (connection, sequelize) => {
  return connection.define(
    "villains",
    {
      name: { type: sequelize.STRING },
      movie: { type: sequelize.STRING },
      slug: { type: sequelize.STRING, primaryKey: true },
    },
    { paranoid: true }
  );
};
module.exports = villains;
