export default function createLastNames(sequelize, DataTypes) {
  let LastName = sequelize.define("last_name", {
    last_name: { type: DataTypes.INTEGER },
  });

  //LastName.associate = function (models) {
  //LastName.hasMany(models.Character, { foreignKey: "last_name_id" });
  //};

  return LastName;
}
