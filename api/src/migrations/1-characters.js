module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name_id: {
        type: Sequelize.INTEGER,
      },
      occupation_id: {
        type: Sequelize.INTEGER,
      },
      voice_actor_id: {
        type: Sequelize.INTEGER,
      },
      catch_phrase: {
        type: Sequelize.TEXT,
      },
      age_range: {
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("characters");
  },
};
