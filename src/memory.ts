interface CreepMemory {
    target: Target;
    working: boolean;
};
interface FlagMemory { };
interface SpawnMemory { };
interface RoomMemory {
    pathGrid: number[][];
};

interface Target {
    id: string;
    type: string;
};