var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(Game.spawns['Spawn1'].energy !== Game.spawns['Spawn1'].energyCapacity){
            if(creep.carry.energy < creep.carryCapacity) {
                let sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: function (structure) {
                            return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
                    structure.energy < structure.energyCapacity;
            }
            });
                if(targets.length > 0) {
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
        else{

            if(creep.memory.upgrading && creep.carry.energy === 0) {
                creep.memory.upgrading = false;
                creep.say('harvest');
            }
            if(!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
                creep.memory.upgrading = true;
                creep.say('upgrade');
            }

            if(creep.memory.upgrading) {
                if(creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
    }
};

module.exports = roleHarvester;