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
    async findOneEmail(email) {
        const organism = await client.query(`
            SELECT email FROM "organism" WHERE email = $1
        `,[email]);
        return organism.rows
    },

    async findOneOrganism(email) {
        const organism = await client.query(`
            SELECT * FROM "organism" WHERE email = $1
        `,[email]);
        return organism.rows[0]
    },

    async updateProfile(organism, emailLogged) {
        await client.query(`
        UPDATE "organism"
        SET email= COALESCE(NULLIF($1,''), email),
            name= COALESCE(NULLIF($2, ''), name),
            description= COALESCE(NULLIF($3,''), description),
            contact_email= COALESCE(NULLIF($4,''), contact_email),
            phone_number= COALESCE(NULLIF($5,''), phone_number)
        WHERE email = $6
    `, [organism.email, 
        organism.name,  
        organism.description, 
        organism.contact_email, 
        organism.phone_number,
    emailLogged]);
    },

    async deleteProfile(email) {
        await client.query(`
        DELETE FROM organism WHERE email = $1;`
        , [email]);
    }
}