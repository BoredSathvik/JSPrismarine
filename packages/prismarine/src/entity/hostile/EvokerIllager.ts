import Entity from '../Entity';
import Server from '../../Server';
import World from '../../world/World';

export default class EvokerIllager extends Entity {
    public static MOB_ID = 'minecraft:evoker_illager';

    public constructor(world: World, server: Server) {
        super(world, server);
    }
}
