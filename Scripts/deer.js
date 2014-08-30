/*****************************/
/* Deer                      */
/* Critter with custom drops */
/*****************************/


var MOB_DMG_NORMAL = 1.5;

System.loadScript("critter");
System.loadScript("sounds");
System.setSuper("deer", "critter");

function deer_onUpdate() {
	mobsound_ambience(self, "deer", 2);
	System.superSafeCall("critter", "onUpdate");
}

function deer_onAttacked() {
	mobsound(self, "deerhit");
	System.superSafeCall("critter", "onAttacked");
}

function deer_onKill() {
	mobsound(self, "deerdeath");
	var d = System.rand() % 11;
    if (d == 0) {
        MobAPI.dropItem(self, 420, 1);
}    else if (d < 4) {
        MobAPI.dropItem(self, 402, 1);
}    else if (d < 10) {
        MobAPI.dropItem(self, 425, 1);
}	 else {
}
}