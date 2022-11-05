const client = require('../../config/db');

module.exports = {
    async createOrganism(organism) {
        const organismQuery = await client.query(`
            INSERT INTO "organism"
            ("email", "name", "password", "description", contact_email, "phone_number")
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [organism.email, 
            organism.name, 
            organism.password, 
            organism.description, 
            organism.contact_email, 
            organism.phone_number]);

        return organismQuery.rows[0];
    },
    async findAllEmails() {
        const organisms = await client.query(`
            SELECT email FROM "organism"
        `);
        return organisms.rows
    }
}