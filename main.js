module.exports.loop = function () {
    if (Game.creeps.Zoe.harvest(Game.getObjectById('58dbc4a48283ff5308a3f585')) === ERR_NOT_IN_RANGE) {
        Game.creeps.Zoe.moveTo(12, 7)
    }
};

