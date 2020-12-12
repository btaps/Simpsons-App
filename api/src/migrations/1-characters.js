module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastNameID: {
        type: Sequelize.INTEGER,
      },
      occupationID: {
        type: Sequelize.INTEGER,
      },
      catchPhrase: {
        type: Sequelize.TEXT,
      },
      ageRange: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("characters");
  },
};
