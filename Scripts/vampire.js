/*****************************/
/* Vampire            */
/* Strong monster       */
/*****************************/


var MOB_DMG_NORMAL = 4;

System.loadScript("aggressive");

function vampire_onUpdate() {
    System.superSafeCall("aggressive", "onUpdate");
}

function vampire_onAttacked() {
    System.superSafeCall("aggressive", "onAttacked");
}


function vampire_onKill() {
	if (System.rand() % 2) {
	    	MobAPI.dropItem(self, 266, 1);
}
}