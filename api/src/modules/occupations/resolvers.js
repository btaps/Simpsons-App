// App Imports
import models from "../../setup/models";

// Get by id
export async function getById(parentValue, { id }) {
  const occupation = await models.Occupation.findOne({
    where: { id: id },
  });

  if (!occupation) {
    // Error handling
    throw new Error(
      "The occupation id you are looking for does not exists, try a different id."
    );
  } else {
    return [occupation];
  }
}

export async function getAll(parentValue) {
  return await models.Occupation.findAll();
}
