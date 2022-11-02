const activityDatamapper = require('../../models/v1/activity')

module.exports = {
    async getOneActivty(req, res){
        const activity = await activityDatamapper.findByPk(req.params.id);
        return res.json(activity);
    },

    async getAllByKeyword(req, res){
        const activities = await activityDatamapper.findByKeyword(req.body.keyword, req.body.zip_code);
        return res.json(activities);
    },

    async getAllByFilter(req, res){
        console.log(req.body);
        const filteredActivities = await activityDatamapper.findAllByFilter(req.body);
        return res.json(filteredActivities);
    },


}