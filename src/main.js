module.exports.loop = function () {

    var spawn = Game.spawns.Amsterdam;
    var target

    if (spawn.energy == spawn.energyCapacity) {
        target = spawn.room.controller
    } else {
        target = spawn
    }

    if (Object.keys(Game.creeps).length < 5) {
        spawn.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {working: false, target: target})
    }

    for (let name in Game.creeps) {

        var creep = Game.creeps[name];

        if (spawn.energy == spawn.energyCapacity) {
            creep.memory.target = target
        }

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false
        } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.target = target
            creep.memory.working = true
        }
        if (creep.memory.working == true) {
            if (creep.transfer(Game.getObjectById(creep.memory.target.id), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.memory.target);
            }
        } else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
}