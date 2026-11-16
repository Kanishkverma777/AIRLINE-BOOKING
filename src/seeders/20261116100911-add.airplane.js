"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          model_no: "AirbusA320",
          capacity: 180,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          model_no: "AirbusA321",
          capacity: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          model_no: "Boeing737800",
          capacity: 189,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          model_no: "Boeing777300ER",
          capacity: 396,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          model_no: "AirbusA380",
          capacity: 555,
          createdAt: new Date(),
          updatedAt: new Date(),

        }],{},);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Airplanes", null, {});

  },
};
