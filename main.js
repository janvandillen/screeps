var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var harvesters = _.filter(Game.creeps, function(creep){return creep.memory.role === 'harvester';});
    var upgraders = _.filter(Game.creeps, function(creep){return creep.memory.role === 'upgrader';});


    if(Game.spawns['Spawn1'].energy>200 && harvesters.length + upgraders.length < 40){
        var newName;
        if(harvesters.length > upgraders.length){
            newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new Upgrader: ' + newName);
        } else {
            newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }
        console.log('Harvesters: ' + harvesters.length + ' Upgraders: ' + upgraders.length);
    }

    if(Game.spawns['Spawn1'].energy === Game.spawns['Spawn1'].energyCapacity){
        for( var name in harvesters ){
            var creep = Game.creeps[name];

        }
    }


    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role === 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role === 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}