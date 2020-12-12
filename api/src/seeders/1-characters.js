module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("characters", [
      {
        firstName: "Bart",
        lastNameID: 1,
        occupationID: 2,
        catchPhrase: "¡Ay, caramba!",
        ageRange: "Kid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Homer",
        lastNameID: 1,
        occupationID: 1,
        catchPhrase: "D'oh",
        ageRange: "Adult",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("characters", null, {});
  },
};
