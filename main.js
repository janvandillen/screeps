module.exports.loop = function () {
    if (Game.creeps.Zoe.energy < Game.creeps.Zoe.carryCapacity) {
        if (Game.creeps.Zoe.harvest(Game.getObjectById('58dbc4a48283ff5308a3f585')) === ERR_NOT_IN_RANGE) {
            Game.creeps.Zoe.moveTo(12, 7);
            Game.creeps.Zoe.say('Hoi');
        }
        Game.creeps.Zoe.say('Hi');
    } else {
        Game.creeps.Zoe.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY);
        console.log('Test')
    }
    console.log('Test2')

};

