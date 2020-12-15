module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("last_names", [
      { last_name: "Simpson" },
      { last_name: "Flanders" },
      { last_name: "Van Houten" },
      { last_name: "Hermann" },
      { last_name: "Albertson" },
      { last_name: "Montgomery Burns" },
      { last_name: "Nahasapeemapetilon" },
      { last_name: "Krabappel" },
      { last_name: "Hibbert" },
      { last_name: "Riviera" },
      { last_name: "Spuckler" },
      { last_name: "Wiggum" },
      { last_name: "Quimby" },
      { last_name: "Krustofsky" },
      { last_name: "Mann" },
      { last_name: "Jones" },
      { last_name: "Leonard" },
      { last_name: "Brockman" },
      { last_name: "Gumble" },
      { last_name: "Skinner" },
      { last_name: "Muntz" },
      { last_name: "McClure" },
      { last_name: "Prince" },
      { last_name: "MacDougal" },
      { last_name: "Szyslak" },
      { last_name: "Carlson" },
      { last_name: "Leonard" },
      { last_name: "Hutz" },
      { last_name: "no last name" },
      { last_name: "Van Horne" },
      { last_name: "Terwilliger" }, //31
      { last_name: "Toot" }, //32
      { last_name: "Smithers" }, //33
      { last_name: "D'Amico" }, //34
      { last_name: "Beardly" }, //35
      { last_name: "Abernathy" }, //36
      { last_name: "Legman" }, //37
      { last_name: "Walters" }, //38
      { last_name: "Hoover" }, //38
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("last_name", null, {});
  },
};
