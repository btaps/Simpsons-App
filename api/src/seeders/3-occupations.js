module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("occupations", [
      {
        title: "Power Plant Worker", // 1
        location_id: 1,
      },
      {
        title: "Student", // 2
        location_id: 3,
      },
      {
        title: "Police Officer", // 3
        location_id: 19,
      },
      {
        title: "Bus Driver", // 4
        location_id: 3,
      },
      {
        title: "Krusty's Show Cast", // 5
        location_id: 21,
      },
      {
        title: "Criminal", // 6
        location_id: 18,
      },
      {
        title: "Doctor", // 7
        location_id: 20,
      },
      {
        title: "School Staff", // 8
        location_id: 3,
      },
      {
        title: "Big Chillen", // 9
        location_id: 24,
      },
      {
        title: "Town Drunk", // 10
        location_id: 2,
      },
      {
        title: "House Wife", // 11
        location_id: 22,
      },
      {
        title: "Comic Book Store Clerk", // 12
        location_id: 12,
      },
      {
        title: "Bartender", // 13
        location_id: 2,
      },
      {
        title: "TV Personality", // 14
        location_id: 23,
      },
      {
        title: "Being Wierd", // 15
        location_id: 24,
      },
      {
        title: "Kwik-E-Mart Clerk", // 16
        location_id: 5,
      },
      {
        title: "Entrepreneur", // 17
        location_id: 24,
      },
      {
        title: "Mayor", // 18
        location_id: 16,
      },
      {
        title: "Retired Senior", // 19
        location_id: 17,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("occupations", null, {});
  },
};
