/**********************************/
/* Passive aggressive mob          */
/* Will only attack once attacked */
/**********************************/

System.loadScript("constants");
System.loadScript("idle");

var VAR_TARGET = "t";
var HAS_TARGET = "ht";

function passiveaggressive_onInit() {
    MobAPI.setVar(self, STATE, STATE_IDLING);
    MobAPI.setVar(self, HAS_TARGET, false);
    MobAPI.setVar(self, TIME1, -1);
}

function passiveaggressive_onUpdate() {
    passiveaggressive_performUpdate(true);
}

function passiveaggressive_performUpdate(shouldIdle) {
    if (MobAPI.getVar(self, TIME1) != -1) {
	var Time2 = getWorldTime();
	if (Time2 < MobAPI.getVar(self, TIME1)) {
	    var Time2 += 360;
}
	if (Time2+10 >= MobAPI.getVar(TIME1)) {
    	    MobAPI.setVar(self, STATE, STATE_IDLING);
    	    MobAPI.setVar(self, HAS_TARGET, false);
    	    MobAPI.eraseVar(self, VAR_TARGET);
	    MobAPI.setVar(self, TIME1, -1);
}
}
    if (MobAPI.getVar(self, STATE) == STATE_ATTACKING) {
        var target = MobAPI.getVar(self, VAR_TARGET);
        if (MobAPI.distanceTo(self, target) < DMG_DISTANCE_THRESHOLD) {
            if (MobAPI.attack(self, target, MOB_DMG_NORMAL)) {
                passiveaggressive_startIdle();
            } else {
                return true;
            }
        } else {
            if (!MobAPI.setTargetEntity(self, target)) {
                // Could not find path, let's idle instead
                passiveaggressive_startIdle();
            }
        }
    }

    // Seperate if-clause, so that we continue idling if we're done attacking
    if (shouldIdle && MobAPI.getVar(self, STATE) == STATE_IDLING) {
        updateIdle(self);
    } else {
        return false;
    }
}

function passiveaggressive_onArrival() {
    if (MobAPI.getVar(self, HAS_TARGET)) {
        var target = MobAPI.getVar(self, VAR_TARGET);
        if (MobAPI.distanceTo(self, target) < DMG_DISTANCE_THRESHOLD) {
            MobAPI.attack(self, target, MOB_DMG_NORMAL);
        } else {
            MobAPI.setTargetEntity(self, target);
        }
    }
}

function passiveaggressive_startIdle() {
    MobAPI.setVar(self, STATE, STATE_IDLING);
    MobAPI.setVar(self, HAS_TARGET, false);
    MobAPI.eraseVar(self, VAR_TARGET);
    MobAPI.setVar(self, TIME1, -1);
}

function passiveaggressive_onAttacked() {
    if (MobAPI.getVar(self, STATE) == STATE_IDLING) {
        var closeEntities = MobAPI.getCloseMobs(self);

        // Instead of using the actual attacker, the mob will blame the closest entity.
        // Useful for "tricking" mobs
        var closest_attacker = false;
        var closest_attacker_distance = 9999;

        for (var i = 0; i < closeEntities.length; i++) {
            var distance = MobAPI.distanceTo(self, closeEntities[i]);
            if (distance < closest_attacker_distance) {
                closest_attacker_distance = distance;
                closest_attacker = closeEntities[i];
            }
        }

        MobAPI.setVar(self, STATE, STATE_ATTACKING);
        MobAPI.setVar(self, HAS_TARGET, true);
        MobAPI.setVar(self, VAR_TARGET, closest_attacker);
	MobAPI.setVar(self, TIME1, getWorldTime());
    }
}