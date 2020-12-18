export default function createLocations(sequelize, DataTypes) {
  let Location = sequelize.define("location", {
    name: { type: DataTypes.STRING },
  });

  return Location;
}
