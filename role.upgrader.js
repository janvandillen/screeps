const roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.carry.energy === 0) {
            creep.memory.work = 'harvest';
            creep.say('harvest');
        } else if (creep.carry.energy === creep.carryCapacity) {

            if (creep.room.controller.ticksToDowngrade < 2000) {
                creep.memory.work = 'upgrade';
                creep.say('upgrade');
            } else if (creep.room.find(FIND_CONSTRUCTION_SITES).length !== 0) {
                creep.memory.work = 'build';
                creep.say('build');
            } else if (creep.room.energyAvailable !== creep.room.energyCapacityAvailable) {
                creep.memory.work = 'transfer';
                creep.say('transfer');
            }
            else {
                creep.memory.work = 'upgrade';
                creep.say('upgrade');
            }
        }

        switch (creep.memory.work) {
            case 'harvest':
                Harvest(creep);
                break;
            case 'upgrade':
                Upgrade(creep);
                break;
            case 'build':
                Build(creep);
                break;
            case 'transfer':
                Transfer(creep);

        }
    }
};

function Harvest(creep) {
    if (creep.harvest(Game.getObjectById('58dbc4a48283ff5308a3f586')) === ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.getObjectById('58dbc4a48283ff5308a3f586'), {visualizePathStyle: {stroke: '#ffaa00'}});
    }
}

function Upgrade(creep) {
    if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
    }
}

function Build(creep) {
    const Constructions = creep.room.find(FIND_CONSTRUCTION_SITES);
    if (creep.build(Constructions[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(Constructions[0], {visualizePathStyle: {stroke: '#ffffff'}});
    }
}

function Transfer(creep) {
    const transfers = creep.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}});
    for (let t in transfers) {
        if (t.energy < t.energyCapacity) {
            if (creep.transfer(t, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(t, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            break;
        }
    }
}

module.exports = roleUpgrader;