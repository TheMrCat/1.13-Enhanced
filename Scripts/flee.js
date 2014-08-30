/***************************************************************/
/* Fleeing script for mobs, can be invoked from other scripts  */
/* Mob will flee away from the given target.                   */
/***************************************************************/

System.loadScript("constants");

var FLEE_DISTANCE = 12;

function find_flee_start() {
    var closeMobs = MobAPI.getCloseMobs(self);
    var flee_target = false;
    var flee_target_distance = 9999;

    for (var i = 0; i < closeMobs.length; i++) {
        var distance = MobAPI.distanceTo(self, closeMobs[i]);
        if (distance < flee_target_distance) {
            flee_target_distance = distance;
            flee_target = closeMobs[i];
        }
    }

    if (flee_target_distance != 9999) {
        flee_start(flee_target);
    }
}

function flee_start(target) {
    var ownLoc = MobAPI.getLocation(self);
    var otherLoc = MobAPI.getLocation(target);

    var xzMod = [ (ownLoc[0] - otherLoc[0]), (ownLoc[2] - otherLoc[2]) ];
    xzMod = System.normalize(xzMod);

    ownLoc[0] += xzMod[0] * FLEE_DISTANCE;
    ownLoc[2] += xzMod[1] * FLEE_DISTANCE;

    if (MobAPI.setTarget(self, ownLoc)) {
        MobAPI.setSpeed(self, DEFAULT_SPEED + 0.2);
        MobAPI.setVar(self, STATE, STATE_MOVING);
    }
}

function flee_onArrival() {
    MobAPI.setSpeed(self, DEFAULT_SPEED);
    MobAPI.setVar(self, STATE, STATE_IDLING);
}