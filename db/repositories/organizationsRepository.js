class OrganizationsRepository {
    constructor(uow) {
        this.uow = uow;
    }

    async createOrganization(name) {
        try {
            const q = this.uow._models.Organization
                .query(this.uow._transaction)
                .insertAndFetch({name: name});

            const organization = await q;

            return organization;
        } catch (err) {
            this.uow._logger.error(`Failed to create organization: ${name}`);
            this.uow._logger.error(err);
            throw err;
        }
    }
}

module.exports = OrganizationsRepository;