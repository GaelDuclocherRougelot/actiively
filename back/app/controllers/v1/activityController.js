const activityDatamapper = require('../../models/v1/activity')

module.exports = {
    async getAllByKeyword(req, res){
        const activities = await activityDatamapper.findByKeyword(req.body.keyword, req.body.zip_code);
        return res.json(activities);
    },

    async getOneActivty(req, res){
        const activity = await activityDatamapper.findByPk(req.params.id);
        return res.json(activity);
    }

}