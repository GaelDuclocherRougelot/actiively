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

    async findActivitiesByOrganism(email) {
        console.log('test');
        const activities = await client.query(`
            SELECT a.name, a.address, a.zip_code, a.city, a.price, a.price_type, a.gender, a.level, a.description, a.image_url 
            FROM activity a
                JOIN organism o ON pk_organism = o.email
            WHERE o.email = $1
        `,[email]);
        return activities.rows
    },

    async createActivity(activity, email) {
        console.log("email in datamapper: " + email);
        const activityQuery = await client.query(`
            INSERT INTO "activity"
                ("name", 
                "description", 
                "address", 
                "zip_code", 
                "city", 
                "price", 
                "price_type", 
                "gender", 
                "level",
                "image_url", 
                "pk_organism")
            VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *
        `, [
            activity.name,
            activity.description, 
            activity.address, 
            activity.zip_code,
            activity.city,
            activity.price,
            activity.price_type,
            activity.gender,
            activity.level,
            activity.image_url,
            email
        ]);

        return activityQuery.rows[0];
    },
}