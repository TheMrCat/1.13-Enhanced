/*******************************************************************************/
/* Critter mob                                                                 */
/* Peaceful mob, does not attack on its own and will run away from aggressives */
/*******************************************************************************/

System.loadScript("constants");
System.loadScript("idle");
System.loadScript("flee");

var critter_onArrival = flee_onArrival;
var critter_onAttacked = find_flee_start;

function critter_onInit() {
    MobAPI.setVar(self, STATE, STATE_IDLING);
}

function critter_onUpdate() {
    if (MobAPI.getVar(self, STATE) == STATE_IDLING) {
        updateIdle(self);
    }
}