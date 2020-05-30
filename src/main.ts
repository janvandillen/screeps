var myCreep = require('creep')
var conductor = require('conductor')

module.exports.loop = function () {

    var spawn = Game.spawns.Amsterdam;

    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name]
        }
    }

    if (Object.keys(Game.creeps).length < 10) {
        spawn.createCreep([WORK, CARRY, WORK, MOVE], undefined, {
            working: false,
            target: conductor.getTarget(spawn.pos)
        })
    }

    for (let name in Game.creeps) {
        myCreep.run(Game.creeps[name])
    }
}