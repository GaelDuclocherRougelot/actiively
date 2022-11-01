const activityDatamapper = require('../../models/v1/activity')

module.exports = {
    async getAll(_, res){
        const activities = await activityDatamapper.findAll();
        return res.json(activities);
    },
    async getOneActivty(req, res){
        const activity = await activityDatamapper.findByPk(req.params.id);
        return res.json(activity);
    }
}