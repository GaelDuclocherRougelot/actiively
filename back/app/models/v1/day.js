const client = require('../../config/db');


module.exports = {

    async createDay(day,pk_activity){
        const dayQuery = await client.query(`
            INSERT INTO "day"
                ("name",
                "start_time",
                "end_time",
                "pk_activity")
            VALUES
                ($1, $2, $3, $4)
            RETURNING *
        `, [
            day.name,
            day.start_time,
            day.end_time,
            pk_activity
        ]);

        return dayQuery.rows[0];
    },

    async deleteDay(pk_activity, email) {
        await client.query(`
            DELETE FROM "day"
            USING activity
            WHERE pk_activity = $1
            AND pk_organism = $2
        `, [pk_activity, email])
    },

    async updateDay(dayToUpdate, code_activity) {
            
        await client.query(`
            UPDATE "day"
                SET name= COALESCE(NULLIF($1,''), name),
                    start_time= COALESCE(NULLIF($2,''), start_time),
                    end_time= COALESCE(NULLIF($3,''), end_time)
                WHERE pk_activity = $4
        `,[
            dayToUpdate.name,
            dayToUpdate.start_time,
            dayToUpdate.end_time,
            code_activity
        ]);
    }
}