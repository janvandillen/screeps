const roleUpgrader = require('role.upgrader');

module.exports.loop = function () {

    for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name)
        }
    }

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
        let newName = spawn.createCreep(Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE]));
        Game.creeps[newName].memory.role = 'upgrader';
    }

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        if (creep.memory.role !== 'Harvester') {
            roleUpgrader.run(creep);
        }
    }

};

