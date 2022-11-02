const client = require('../../config/db');

module.exports = {
    /**
     * Get one activity by pk
     * @param {integer}
     */
    async findByPk(id){
        const result = await client.query(`
            SELECT 
                a.name, a.address, a.zip_code, d.name as day, d.start_time, d.end_time, a.price, a.price_type, a.gender, a.level, a.description,
                json_build_object('email', o.contact_email, 'phone_number', o.phone_number, 'organism_description', o.description) as organism_infos 
            FROM activity a
                JOIN day d ON pk_activity = code_activity
                JOIN organism o ON pk_activity = code_activity
            WHERE code_activity = ($1)
            LIMIT 1
        `, [id]);

        return result.rows[0]
    },

    async findByKeyword(keyword, zip_code){
        const result = await client.query(`
            SELECT a.code_activity, a.name, a.zip_code, d.name as day, a.price, a.price_type from "activity" a
            JOIN day d ON pk_activity = code_activity
            WHERE a.name SIMILAR TO ($1)
            AND a.zip_code = ($2)
        `, [keyword, zip_code]);
        return result.rows
    },
    // async findAllByFilter(q){ // avec Slonik peut etre
    //     const result = await client.query(`
    //         SELECT a.code_activity, a.name, a.zip_code, d.name as day, a.price, a.price_type from "activity" a
    //         JOIN day d ON pk_activity = code_activity
    //         WHERE a.name SIMILAR TO ($1)
    //         AND a.zip_code = ($2)
    //         AND d.code_day = ANY(${sql.array(q.dayIds, 'int4')}
    //     `, [q.keyword, q.zip_code, q.dayIds]);
    //     return result.rows
    // }
}