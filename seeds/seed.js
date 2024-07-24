/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.schema.raw("TRUNCATE pet_type CASCADE");

  // Deletes ALL existing entries
  await knex("pet_type").del();
  await knex("pet_type").insert([
    { id: 1, name: "Bird" },
    { id: 2, name: "Dog" },
    { id: 3, name: "Lizard" },
    { id: 4, name: "Cat" },
  ]);

  await knex.schema.raw("TRUNCATE food_type CASCADE");

  // Deletes ALL existing entries
  await knex("food_type").del();
  await knex("food_type").insert([
    { id: 1, name: "Purina One" },
    { id: 2, name: "Bird-Stew" },
    { id: 3, name: "Lizard Lasagna" },
    { id: 4, name: "Fish" },
  ]);

  // Deletes ALL existing entries
  await knex("pet").del();
  await knex("pet").insert([
    { id: 1, name: "Buddy", pet_type_id: 3, food_type_id: 3 },
    { id: 2, name: "Patrick", pet_type_id: 4, food_type_id: 2 },
    { id: 3, name: "Henrietta", pet_type_id: 2, food_type_id: 1 },
    { id: 4, name: "Bruiser", pet_type_id: 1, food_type_id: 4 },
  ]);
};
