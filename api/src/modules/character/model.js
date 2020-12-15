"use strict";

module.exports = function (sequelize, DataTypes) {
  let Character = sequelize.define("character", {
    first_name: { type: DataTypes.STRING },
    last_name_id: { type: DataTypes.INTEGER },
    occupation_id: { type: DataTypes.INTEGER },
    voice_actor_id: { type: DataTypes.INTEGER },
    catch_phrase: { type: DataTypes.STRING },
    age_range: { type: DataTypes.STRING },
  });

  //Character.associate = function (models) {
  //Character.hasMany(models.Subscription);
  //};

  return Character;
};
