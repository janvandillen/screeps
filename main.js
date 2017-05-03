module.exports.loop = function () {
    if (Game.creeps.Zoe.carry.energy < Game.creeps.Zoe.carryCapacity) {
        if (Game.creeps.Zoe.harvest(Game.getObjectById('58dbc4a48283ff5308a3f585')) === ERR_NOT_IN_RANGE) {
            Game.creeps.Zoe.moveTo(12, 7);
        }

    } else {
        Game.creeps.Zoe.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY);
    }

    if (Game.creeps.Owen.carry.energy < Game.creeps.Owen.carryCapacity) {
        if (Game.creeps.Owen.harvest(Game.getObjectById('58dbc4a48283ff5308a3f586')) === ERR_NOT_IN_RANGE) {
            Game.creeps.Owen.moveTo(13, 7);
        }

    } else {
        Game.creeps.Owen.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY);
    }


};

