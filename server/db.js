// Import required modules and dependencies
const Sequelize = require('sequelize');

/**
 * Represents a Sequelize instance for database interaction.
 * @type {Sequelize}
 */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

module.exports = sequelize;
