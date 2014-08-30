/***************************************/
/* Boar                                */
/* Passiveaggressive with custom drops */
/***************************************/


var MOB_DMG_NORMAL = 2;

System.loadScript("passiveaggressive");
System.loadScript("sounds");
System.setSuper("boar", "passiveaggressive");

function boar_onUpdate() {
	mobsound_ambience(self, "boar", 2);
	System.superSafeCall("passiveaggressive", "onUpdate");
}

function boar_onAttacked() {
	mobsound(self, "boarhit");
	System.superSafeCall("passiveaggressive", "onAttacked");
}

function boar_onKill() {
    mobsound(self, "boardeath");
    var d = System.rand() % 8
    if (d > 2) {
	MobAPI.dropItem(self, 426, 1);
}   else if (d == 0) {
	MobAPI.dropItem(self, 402, 1);
}   else {
}
}