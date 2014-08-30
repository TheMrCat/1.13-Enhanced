/******************************************************/
/* Aggressive mob                                     */
/* Idles around its spawn location (see idle.js)      */
/* Will attack attack all non-aggressives it can see. */
/******************************************************/

System.loadScript("constants");
System.loadScript("idle");
System.loadScript("passiveaggressive");
System.setSuper("aggressive", "passiveaggressive");

function aggressive_onUpdate() {
    if (passiveaggressive_performUpdate(false))
        return; // If our passiveaggressive super is doing stuff, don't search for other targets

    var targets = MobAPI.getCloseMobs(self);

    var closest_distance = 9999;
    var closest_mob = false;
    for(var i = 0; i < targets.length; i++) {
        var distance = MobAPI.distanceTo(self, targets[i]);
        if(distance < closest_distance && !MobAPI.isType(targets[i], "aggressive")) {
            if (MobAPI.canSee(self, targets[i])) {
                closest_distance = distance;
                closest_mob = targets[i];
            }
        }
    }

    if (closest_distance != 9999) {
        MobAPI.setVar(self, STATE, STATE_ATTACKING);
        MobAPI.setVar(self, VAR_TARGET, closest_mob);
        MobAPI.setVar(self, HAS_TARGET, true);
        MobAPI.setTargetEntity(self, closest_mob);
	MobAPI.setVar(self, TIME1, getWorldTime());
    } else {
        updateIdle(self);
    }
}