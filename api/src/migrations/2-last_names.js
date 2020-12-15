module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("last_names", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      last_name: {
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("last_names");
  },
};
