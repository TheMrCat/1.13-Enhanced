/********************************************/
/* Villlager, derps around.                 */
/* Goes home at night                       */
/********************************************/

System.loadScript("constants");
System.loadScript("idle");

function villager_onInit() {
    MobAPI.setVar(self, STATE, STATE_IDLING);
}

function villager_onUpdate() {
    if (MobAPI.getWorldTime() > 230) {
        if (MobAPI.setTarget(self, MobAPI.getSpawn(self))) {
        	MobAPI.setVar(self, STATE, STATE_MOVING);
        } else {
        	updateIdle(self);
        }
    } else {
        updateIdle(self);
    }
}

function villager_onArrival() {
    MobAPI.setVar(self, STATE, STATE_IDLING);
}

function villager_onKill() {
	MobAPI.dropItem(self, 414, 1);
}