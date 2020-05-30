export class MyRoom {

    pathGrid: number[][]
    room: Room

    constructor(room: Room) {
        this.room = room
        this.pathGrid = room.memory.pathGrid
        if (this.pathGrid == undefined) {
            this.pathGrid = Array(50).fill(Array(50).fill(0))
            room.memory.pathGrid = this.pathGrid
        }
    }

    public addRoad(pos: RoomPosition): void {
        if (this.pathGrid[pos.x][pos.y]++ > 100) {
            pos.createConstructionSite(STRUCTURE_ROAD)
        }
        this.room.memory.pathGrid = this.pathGrid
    }
}
