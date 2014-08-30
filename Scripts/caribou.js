/*****************************/
/* Caribo                    */
/* Critter with custom drops */
/*****************************/


var MOB_DMG_NORMAL = 2;

System.loadScript("critter");
System.loadScript("sounds");
System.setSuper("caribou", "critter");

function caribou_onUpdate() {
	mobsound_ambience(self, "deer", 2);
	System.superSafeCall("critter", "onUpdate");
}

function caribou_onAttacked() {
	mobsound(self, "deerhit");
	System.superSafeCall("critter", "onAttacked");
}

function caribou_onKill() {
	mobsound(self, "deerdeath");
	var d = System.rand() % 9;
    if (d < 3) {
        MobAPI.dropItem(self, 420, 1);
}    else if (d < 8) {
        MobAPI.dropItem(self, 425, 1);
}    else if (d < 9) {
        MobAPI.dropItem(self, 425, 2);
}	 else {
}
}