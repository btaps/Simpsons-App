// App Imports
import connection from "../../setup/database";

const models = connection.models;

// Get character by Name
export async function getByName(parentValue, { characterName }) {
  const character = await models.Character.findOne({
    where: { first_name: characterName },
  });

  if (!character) {
    // Character does not exists
    throw new Error(
      "The character you are looking for does not exists, try a different id."
    );
  } else {
    return character;
  }
}

// Get all characters
export async function getAll(parentValue) {
  return await models.Character.findAll();
}

// Create character
export async function create(
  parentValue,
  {
    first_name,
    last_name_id,
    occupation_id,
    voice_actor_id,
    catch_phrase,
    age_range,
  }
) {
  return await models.Character.create({
    first_name,
    last_name_id,
    occupation_id,
    voice_actor_id,
    catch_phrase,
    age_range,
  });
}

// Update character
export async function update(parentValue, { characterId, first_name }) {
  const character = await models.Character.findOne({
    where: { id: characterId },
  });

  if (!character) {
    // Character does not exists
    throw new Error(
      "The character you are looking for does not exists, try a different id."
    );
  } else {
    return await models.Character.update(
      {
        first_name,
      },
      { where: { id: characterId } }
    );
  }
}

// Delete character
export async function remove(parentValue, { characterId }) {
  const character = await models.Character.findOne({
    where: { id: characterId },
  });

  if (!character) {
    // Character does not exists
    throw new Error(
      "The character you are looking for does not exists, try a different id."
    );
  } else {
    return await models.Character.destroy({ where: { id: characterId } });
  }
}
