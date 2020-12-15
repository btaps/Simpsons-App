module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("locations", [
      { name: "Springfield Nuclear Power Plant" },
      { name: "Moe's Tavern" },
      { name: "Springfield Elementary School" },
      { name: "Krusty Burger" },
      { name: "Kwik-E-Mart" },
      { name: "Lard Lad Donuts" },
      { name: "Luigi's" },
      { name: "Try-N-Save" },
      { name: "Springfield Mall" },
      { name: "Noiseland Video Arcade" },
      { name: "Barney's Bowl-A-Rama" },
      { name: "The Android's Dungeon & Baseball Card Shop" },
      { name: "Herman's Military Antiques" },
      { name: "Itchy & Scratchy Land" },
      { name: "Krustyland" },
      { name: "The Springfield City Hall" },
      { name: "Springfield Retirement Castle" },
      { name: "Springfield Penitentiary" },
      { name: "Springfield Police Department" },
      { name: "Springfield General Hospital" },
      { name: "Krusty the Clown Show" },
      { name: "Home Sweet Home" },
      { name: "Channel 6 Studio" },
      { name: "Somewhere in Springfield" },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null, {});
  },
};
