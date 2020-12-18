// App Imports
import models from "../../setup/models";

// Get by id
export async function getById(parentValue, { id }) {
  const lastName = await models.LastName.findOne({
    where: { id: id },
  });

  if (!lastName) {
    // Character does not exists
    throw new Error(
      "The last name id you are looking for does not exists, try a different id."
    );
  } else {
    return [lastName];
  }
}

export async function getAll(parentValue) {
  //return await models.LastName.findAll({ include: models.LastName });
  return await models.LastName.findAll();
}
