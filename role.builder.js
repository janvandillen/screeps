const roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.building && creep.carry.energy === 0) {
            creep.memory.building = false;
            creep.say('harvest');
        }
        if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('build');
        }

        if (creep.memory.building) {
            const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            const extensions = creep.room.find(FIND_MY_STRUCTURES, { filter: {structureType: STRUCTURE_EXTENSION}});
            if (targets.length) {
                if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                }
            } else if (extensions.length){
                if (creep.transfer(extensions[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(extensions[0], { visualizePathStyle: { stroke: '#ffffff' } });
                    creep.say('Hi');
                }
            }

        }
        else {
            let sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }

        //creep.moveTo(creep.memory.myTarget,  {visualizePathStyle: {stroke: '#ffaa00'}})
    }
};

module.exports = roleBuilder;