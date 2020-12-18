// App Imports
import models from "../../setup/models";

// Get by id
export async function getById(parentValue, { id }) {
  const location = await models.Location.findOne({
    where: { id: id },
  });

  if (!location) {
    // Error handling
    throw new Error(
      "The location id you are looking for does not exists, try a different id."
    );
  } else {
    return [location];
  }
}

export async function getAll(parentValue) {
  return await models.Location.findAll();
}
