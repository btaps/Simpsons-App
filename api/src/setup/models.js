// Imports
import { Sequelize, DataTypes } from "sequelize";

// App Imports
import databaseConnection from "./database";

import createCharacters from "../modules/character/model";
import createLastNames from "../modules/last-names/model";
import createOccupations from "../modules/occupations/model";
import createLocations from "../modules/locations/model";
import createVoiceActors from "../modules/voice-over-actors/model";

const models = {
  Character: createCharacters(databaseConnection, DataTypes),
  LastName: createLastNames(databaseConnection, DataTypes),
  Occupation: createOccupations(databaseConnection, DataTypes),
  Location: createLocations(databaseConnection, DataTypes),
  VoiceActor: createVoiceActors(databaseConnection, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;
