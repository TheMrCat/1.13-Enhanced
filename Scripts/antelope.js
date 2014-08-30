/*****************************/
/* Antelop                   */
/* Critter with custom drops */
/*****************************/


var MOB_DMG_NORMAL = 2;

System.loadScript("critter");
System.loadScript("sounds");
System.setSuper("antelope", "critter");

function antelope_onUpdate() {
	mobsound_ambience(self, "deer", 2);
	System.superSafeCall("critter", "onUpdate");
}

function antelope_onAttacked() {
	mobsound(self, "deerhit");
	System.superSafeCall("critter", "onAttacked");
}

function antelope_onKill() {
	mobsound(self, "deerdeath");
	var d = System.rand() % 9;
     if (d < 4) {
        MobAPI.dropItem(self, 402, 1);
}    else if (d < 8) {
        MobAPI.dropItem(self, 425, 1);
}	 else {
}
}