const activityDatamapper = require('../../models/v1/activity')

module.exports = {
    async getOneActivty(req, res){
        const activity = await activityDatamapper.findByPk(req.params.id);
        return res.json(activity);
    },

    async getAllByKeyword(req, res){
        const activities = await activityDatamapper.findByKeyword(req.body);
        return res.json(activities);
    }

}