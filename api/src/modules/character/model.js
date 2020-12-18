export default function createCharacters(sequelize, DataTypes) {
  let Character = sequelize.define("character", {
    first_name: { type: DataTypes.STRING },
    last_name_id: { type: DataTypes.INTEGER },
    occupation_id: { type: DataTypes.INTEGER },
    voice_actor_id: { type: DataTypes.INTEGER },
    catch_phrase: { type: DataTypes.STRING },
    age_range: { type: DataTypes.STRING },
  });

  //Character.associate = function (models) {
  //Character.belongsTo(models.LastName, {
  //foreignKey: "last_name_id",
  //});
  //};

  return Character;
}
