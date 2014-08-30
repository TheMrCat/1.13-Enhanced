/*****************************/
/* Goblin                    */
/* Enemy with a nasty attack */
/*****************************/

var MOB_DMG_NORMAL = 2;

System.loadScript("aggressive");
System.loadScript("flee");
System.loadScript("sounds");

function goblin_onInit() {
    System.superSafeCall("aggressive", "onInit");
    MobAPI.setVar(self, "item", 0);
}

function goblin_onUpdate() {
    mobsound_ambience(self, "goblin", 2);

    var item = MobAPI.getVar(self, "item");
    if (item > 0) {
        if (MobAPI.getVar(self, HAS_TARGET)) {
            var target = MobAPI.getVar(self, VAR_TARGET);
            if (MobAPI.canSee(self, target)) {
                flee_start(MobAPI.getVar(self, VAR_TARGET));
                return;
            }
        } else {
            find_flee_start();
            return;
        }
    }
    System.superSafeCall("aggressive", "onUpdate");
}

function goblin_onArrival() {
    if (MobAPI.getVar(self, HAS_TARGET)) {
        var target = MobAPI.getVar(self, VAR_TARGET);
        if (MobAPI.distanceTo(self, target) < DMG_DISTANCE_THRESHOLD) {
            if (MobAPI.getVar(self, "item") == 0) {
                MobAPI.stealAttack(self, target, 0.5);
            } else {
                MobAPI.attack(self, target, 0.5);
            }
        } else {
            MobAPI.setTargetEntity(self, target);
        }
    }
}

function goblin_onAttacked() {
    mobsound(self, "goblinhit");
    System.superSafeCall("aggressive", "onAttacked");
}


function goblin_onKill() {
    mobsound(self, "goblindeath");
    var item = MobAPI.getVar(self, "item");

    if (item > 0) {
        MobAPI.dropItem(self, item, 1);
    }
}