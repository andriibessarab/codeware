const {Model, Op, DataTypes} = require('sequelize');
const sequelize = require('../db');
const bcrypt = require('bcrypt');

/**
 * Represents the User model.
 */
class User extends Model {
    /**
     * Create a new user with the given data.
     * @param {object} userData - The user data to create.
     * @returns {Promise<User>} A Promise that resolves to the created User instance.
     */
    static createUser(userData) {
        return this.create(userData);
    }

    /**
     * Check if a user with the given email or username exists.
     * @param {string} email - The email to check.
     * @param {string} username - The username to check.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the user exists.
     */
    static async checkUserExists(email, username) {
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    {email: email},
                    {username: username},
                ],
            },
        });
        return existingUser !== null;
    }

    /**
     * Hash the provided password.
     * @param {string} password - The password to hash.
     * @returns {Promise<string>} A Promise that resolves to the hashed password.
     */
    static async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    /**
     * Check if a given password matches the user's stored password.
     * @param {string} password - The password to check.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating password match.
     */
    async checkPassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

/**
 * The User model's field definitions and validations.
 */
User.init({
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            isUUID: 4,
        }
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u,
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 15],
            isAlphanumeric: true,
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        isUUID: 4,
        validate: {
            isDate: true,
            isAfter: "1900-01-01",
        }
    },
}, {
    sequelize, // Sequelize connection instance
    modelName: 'User', // Model name
    timestamps: true, // createdAt & updatedAt timestamps
});

/**
 * Export the User model for use in other parts of the application.
 * @type {User}
 */
module.exports = User;
