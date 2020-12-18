export default function createVoiceActors(sequelize, DataTypes) {
  let VoiceActor = sequelize.define("voice_over_actor", {
    name: { type: DataTypes.STRING },
  });

  return VoiceActor;
}

