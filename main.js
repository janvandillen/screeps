const roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    const spawn = Game.spawns.Spawn1;

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

    //roleUpgrader.run(Game.creeps.Gianna);
    //roleUpgrader.run(Game.creeps.Riley);
    //roleUpgrader.run(Game.creeps.Bella);

    if (spawn.energy === 300 && _.size(Game.creeps) < 12) {
        spawn.createCreep(Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE]), undefined, {role: 'upgrader'});
    }

    const upgraders = _.filter(Game.creeps, function (creep) {
        return creep.memory.role === 'upgrader';
    });

    console.log(upgraders.length);

    for (let name in upgraders) {
        roleUpgrader.run(Game.creeps[name]);
    }





};

