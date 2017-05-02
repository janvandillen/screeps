/**
 * Created by janva on 2-5-2017.
 */
let actionGetEnergy = {

    /** @param {Creep} creep **/
    run: function (creep) {
        let bestSource;
        let value = 0;
        for(let source in creep.room.find(FIND_SOURCES)){
            let t = source.energy / Math.max(creep.pos.x-source.pos.x,creep.pos.y-source.pos.y);
            if(t > value){
                value = t;
                bestSource = source;
            }
        }
        creep.memory.myTarget = bestSource;
        creep.memory.myDestination = 'source';
    }
};

module.exports = actionGetEnergy;