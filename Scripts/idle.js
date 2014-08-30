/**********************************************************************/
/* Idling script for mobs, can be invoked from other scripts          */
/* Mob will stay around its spawn location with a radius of 10 blocks */
/**********************************************************************/

var SPAWN_RADIUS = 13;
var IDLE_RADIUS = 12;

function updateIdle(mob) {
    if (System.rand() % 3 === 1) {
        var spawn = MobAPI.getSpawn(mob);
        var location = MobAPI.getLocation(mob);

        // New x
        var diffX = (System.rand() % IDLE_RADIUS) - (IDLE_RADIUS / 2);
        if ((location[0] + diffX) > (spawn[0] + SPAWN_RADIUS) ||
            (location[0] + diffX) < (spawn[0] - SPAWN_RADIUS)) {
            diffX = -diffX;
        }
        location[0] += diffX;

        // New z
        var diffZ = (System.rand() % IDLE_RADIUS) - (IDLE_RADIUS / 2);
        if ((location[2] + diffZ) > (spawn[2] + SPAWN_RADIUS) ||
            (location[2] + diffZ) < (spawn[2] - SPAWN_RADIUS)) {
            diffZ = -diffZ;
        }
        location[2] += diffZ;

        MobAPI.setTarget(self, location);
    }
}