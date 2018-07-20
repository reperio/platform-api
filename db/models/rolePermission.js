const Model = require('objection').Model;
const BaseModel = require('./baseModel');

class RolePermission extends BaseModel {
    static get tableName() {
        return 'rolePermissions';
    }

    static get jsonSchema() {
        return {
            type: 'Object',
            properties: {
                roleId: { type: 'string' },
                permissionId: { type: 'string' }
            }
        };
    }

    static get relationMappings() {
        const Role = require('./role');
        const Permission = require('./permission');

        return {
            roles: {
                relation: Model.HasOneRelation,
                modelClass: Role,
                join: {
                    from: 'rolePermissions.roleId',
                    to: 'roles.id'
                }
            },
            permissions: {
                relation: Model.HasOneRelation,
                modelClass: Permission,
                join: {
                    from: 'rolePermissions.permissionId',
                    to: 'permissions.id'
                }
            }
        };
    }
}

module.exports = RolePermission;