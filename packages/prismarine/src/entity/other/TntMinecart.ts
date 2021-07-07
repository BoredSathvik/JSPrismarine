import Entity from '../Entity';
import Server from '../../Server';
import World from '../../world/World';

export default class TntMinecart extends Entity {
    public static MOB_ID = 'minecraft:tnt_minecart';

    public constructor(world: World, server: Server) {
        super(world, server);
    }
}
