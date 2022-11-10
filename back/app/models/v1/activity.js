const client = require('../../config/db');

module.exports = {
    /**
     * Get one activity by pk
     * @param {integer} id
     */
    async findByPk(id){
        const result = await client.query(`
            SELECT 
                a.name, a.address, a.zip_code, a.city, d.name as day, d.start_time, d.end_time, a.price, a.price_type, a.gender, a.level, a.description, a.image_url,
                json_build_object('email', o.contact_email,'name', o.name, 'phone_number', o.phone_number, 'organism_description', o.description) as organism_infos 
            FROM activity a
                JOIN day d ON pk_activity = code_activity
                JOIN organism o ON pk_organism = o.email
            WHERE code_activity = ($1)
            LIMIT 1
        `, [id]);

        return result.rows[0]
    },
    /**
     * @param q = query object
     * @example // of the query body
     * {
     *  "keyword": "Tennis%",
     *  "zip_code": "75%"
     * }
     * @returns lists of activities filtered by keyword and zip code
     */
     async findByKeyword(q){
        const result = await client.query(`
            SELECT a.code_activity, a.name as activity_name, o.name as organism_name, a.zip_code, a.city, d.name as day, a.price, a.price_type, a.gender, a.level, a.image_url from "activity" a
            JOIN day d ON pk_activity = code_activity
            JOIN organism o ON pk_organism = o.email
            WHERE a.name SIMILAR TO ($1)
            AND a.zip_code SIMILAR TO ($2)
        `, [q.keyword, q.zip_code]);
        return result.rows
    },

        /**
     * Get one activity by name
     * @param {string} name
     */
         async findByName(name){
            const result = await client.query(`
                SELECT 
                    a.name, a.code_activity
                FROM activity a
                WHERE a.name = ($1)
                LIMIT 1
            `, [name]);
    
            return result.rows[0]
        },

        async deleteActivityByPk(id, email) {
            await client.query(`
                DELETE FROM "activity"
                WHERE code_activity = $1
                AND pk_organism = $2
            `, [id, email]);
        },

        async findActivitiesByOrganism(email) {
            const result = await client.query(`
                SELECT 
                    a.code_activity, a.name, a.address, a.zip_code, a.city, d.name as day, d.start_time, d.end_time, a.price, a.price_type, a.gender, a.level, a.description, a.image_url,
                    json_build_object('email', o.contact_email,'name', o.name, 'phone_number', o.phone_number, 'organism_description', o.description) as organism_infos 
                FROM activity a
                    JOIN day d ON pk_activity = code_activity
                    JOIN organism o ON pk_organism = o.email
                WHERE o.email = ($1)
            `, [email]);
            return result.rows;
        },
    
        async createActivity(activity, email) {
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