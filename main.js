module.exports.loop = function () {
    if (Game.spawns.Spawn1.energy < 300) {
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
    }

    if (Game.creeps.Zoe.ticksToLive < 500) {
        Game.spawns.Spawn1.renewCreep(Game.creeps.Zoe);
    }

    if (Game.creeps.Owen.ticksToLive < 500) {
        Game.spawns.Spawn1.renewCreep(Game.creeps.Owen);
    }

    if (Game.creeps.Blake.carry.energy < Game.creeps.Blake.carryCapacity) {
        if (Game.creeps.Blake.harvest(Game.getObjectById('58dbc4a48283ff5308a3f586')) === ERR_NOT_IN_RANGE) {
            Game.creeps.Blake.moveTo(13, 8);
        }

    } else {
        if (Game.creeps.Blake.transfer(Game.getObjectById('58dbc4a48283ff5308a3f587'), RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            Game.creeps.Blake.moveTo(44, 8);
        }
    }

    if (Game.creeps.Riley.carry.energy < Game.creeps.Riley.carryCapacity) {
        if (Game.creeps.Riley.harvest(Game.getObjectById('58dbc4a48283ff5308a3f586')) === ERR_NOT_IN_RANGE) {
            Game.creeps.Riley.moveTo(13, 9);
        }

    } else {
        if (Game.creeps.Riley.transfer(Game.getObjectById('58dbc4a48283ff5308a3f587'), RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            Game.creeps.Riley.moveTo(44, 9);
        }
    }


};

