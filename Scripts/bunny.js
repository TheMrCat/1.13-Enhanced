/**********************************/
/* Bunny                          */
/* Critter that follows its owner */
/**********************************/


var MOB_DMG_NORMAL = 1;

System.loadScript("critter");
System.setSuper("bunny", "critter");

function bunny_onUpdate() {
    var owner = MobAPI.getVar(self, "owner");
    if (owner != undefined) {
        var distance = MobAPI.distanceTo(self, owner);
        if (distance > 5) {
            MobAPI.setTargetEntity(self, owner);
            return;
        }
    }

    System.superSafeCall("critter", "onUpdate");
}
function bunny_onKill(){
    if (System.rand() % 2) {
        MobAPI.dropItem(self, 427, 1);
}    else {
        MobAPI.dropItem(self, 419, 1);
}
}