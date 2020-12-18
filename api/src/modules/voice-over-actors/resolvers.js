// App Imports
import models from "../../setup/models";

// Get by id
export async function getById(parentValue, { id }) {
  const actor = await models.VoiceActor.findOne({
    where: { id: id },
  });

  if (!actor) {
    // Error handling
    throw new Error(
      "The actor id you are looking for does not exists, try a different id."
    );
  } else {
    return [actor];
  }
}

export async function getAll(parentValue) {
  return await models.VoiceActor.findAll();
}
