const Model = require('objection').Model;
const BaseModel = require('./baseModel');

class UserOrganization extends BaseModel {
    static get tableName() {
        return 'userOrganizations';
    }

    static get idColumn() {
        return ['organizationId', 'userId'];
    }

    static get jsonSchema() {
        return {
            type: 'Object',
            properties: {
                organizationId: { type: 'uuid' },
                userId: { type: 'uuid' }
            }
        };
    }

    static get relationMappings() {
        const Organization = require('./organization');
        const User = require('./user');

        return {
            roles: {
                relation: Model.HasOneRelation,
                modelClass: Organization,
                join: {
                    from: 'userOrganizations.organizationId',
                    to: 'organizations.id'
                }
            },
            users: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'userOrganizations.userId',
                    to: 'users.id'
                }
            }
        };
    }
}

module.exports = UserOrganization;