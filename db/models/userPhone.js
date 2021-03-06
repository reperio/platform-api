const Model = require('objection').Model;
const BaseModel = require('./baseModel');

class UserPhone extends BaseModel {
    static get tableName() {
        return 'userPhones';
    }

    static get jsonSchema() {
        return {
            type: 'Object',
            properties: {
                userId: { type: 'string' },
                numberVerified: { type: 'boolean' },
                number: { type: 'string' },
                phoneType: { type: 'string' },
                deleted: { type: 'boolean' }
            }
        };
    }

    static get relationMappings() {
        const User = require('./user');

        return {
            users: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'userPhones.userId',
                    to: 'users.id'
                }
            }
        };
    }
}

module.exports = UserPhone;
