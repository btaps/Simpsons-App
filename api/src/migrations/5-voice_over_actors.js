module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("voice_over_actors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("voice_over_actors");
  },
};
