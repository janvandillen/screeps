import { MyRoom } from "./classes";

var conductor = require('conductor')

module.exports = {

    run: function (creep: Creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false
        } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.target = conductor.getTarget(creep.pos)
            creep.memory.working = true
        }

        if (creep.memory.working == true) {
            let out
            if (creep.memory.target.type == "CONSTRUCTION_SITE") {
                out = creep.build(Game.getObjectById(creep.memory.target.id))
            } else {
                out = creep.transfer(Game.getObjectById(creep.memory.target.id), RESOURCE_ENERGY)
            }

            if (out == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.getObjectById(creep.memory.target.id));
                if (creep.pos.lookFor(LOOK_CONSTRUCTION_SITES).length == 0 && creep.pos.lookFor(LOOK_STRUCTURES).length == 0) {
                    var myRoom = new MyRoom(creep.room)
                    myRoom.addRoad(creep.pos)
                }
            } else if (out != OK) {
                creep.memory.target = conductor.getTarget(creep.pos)
            }
        } else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
                if (creep.pos.lookFor(LOOK_CONSTRUCTION_SITES).length == 0 && creep.pos.lookFor(LOOK_STRUCTURES).length == 0) {
                    var myRoom = new MyRoom(creep.room)
                    myRoom.addRoad(creep.pos)
                }
            }
        }
    }
};