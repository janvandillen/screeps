module.exports = {
    getTarget: function (pos) {
        let room = Game.rooms[pos.roomName]
        if (room.energyAvailable != room.energyCapacityAvailable) {
            return {
                type: "SPAWN",
                id: pos.findClosestByRange(FIND_MY_SPAWNS).id
            }
        }

        if (room.controller.ticksToDowngrade < 5000) {
            return {
                type: "CONTROLLER",
                id: room.controller.id
            }
        }

        let items = room.find(FIND_CONSTRUCTION_SITES)
        if (items.length > 0) {
            var item = items[Math.floor(Math.random() * items.length)];
            return {
                type: "CONSTRUCTION_SITE",
                id: item.id
            }
        }

        return {
            type: "CONTROLLER",
            id: room.controller.id
        }
    }
};