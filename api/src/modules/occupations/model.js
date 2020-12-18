export default function createOccupations(sequelize, DataTypes) {
  let Occupation = sequelize.define("occupation", {
    title: { type: DataTypes.STRING },
    location_id: { type: DataTypes.INTEGER },
  });

  return Occupation;
}
