const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

module.exports.loop = function () {

    let harvesters = _.filter(Game.creeps, function(creep){return creep.memory.role === 'harvester';});
    let upgraders = _.filter(Game.creeps, function(creep){return creep.memory.role === 'upgrader';});
    let builders = _.filter(Game.creeps, function (creep){return creep.memory.role === 'builder';});

    for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name)
        }
    }

    if (Game.spawns['Spawn1'].energy > 200 && harvesters.length + upgraders.length + builders.length < 40) {
        let myrole;
        if (harvesters.length < 14) {
            myrole = "harvester";
        } else if (upgraders.length < 14) {
            myrole = "upgrader";
        } else {
            myrole = 'builder'
        }

        let newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], undefined, {role: myrole});
        console.log('Spawning new ' + myrole + ': ' + newName);
        console.log('Harvesters: ' + harvesters.length + ' Upgraders: ' + upgraders.length);
    }

    if(Game.spawns['Spawn1'].energy === Game.spawns['Spawn1'].energyCapacity){
        for( let name in harvesters ){
            let creep = Game.creeps[name];

        }
    }


    if(Game.spawns['Spawn1'].spawning) {
        let spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role === 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role === 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role === 'builder') {
            roleBuilder.run(creep);
        }
    }
};