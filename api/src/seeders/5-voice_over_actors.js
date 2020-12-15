module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("voice_over_actors", [
      { name: "Dan Castellaneta" },
      { name: "Nancy Cartwright" },
      { name: "Julie Kavner" },
      { name: "Yeardley Smith" },
      { name: "Harry Shearer" },
      { name: "Pamela Hayden" },
      { name: "Hank Azaria" },
      { name: "Marcia Wallace" },
      { name: "Russi Taylor" },
      { name: "Maggie Roswell" },
      { name: "Phil Hartman" },
      { name: "Kelsey Grammer" },
      { name: "Jan Hooks" },
      { name: "Joe Mantegna" },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("voice_over_actors", null, {});
  },
};
