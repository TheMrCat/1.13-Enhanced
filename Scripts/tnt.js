/*****************************/
/* TNTortoise              */
/* Exploding mob       */
/*****************************/


var MOB_DMG_NORMAL = 1;

System.loadScript("aggressive");
System.loadScript("sounds");

function tnt_onUpdate() {
	if (System.rand() % 100) {
		mobsound(self, "siss");
	}
    System.superSafeCall("aggressive", "onUpdate");
}

function tnt_onAttacked() {
    mobsound(self, "siss");
    System.superSafeCall("aggressive", "onAttacked");
}


function tnt_onKill() {
    mobsound(self, "siss");
    var d = System.rand() % 7
    if (d <= 1) {
    	MobAPI.dropItem(self, 400, 2);
}   else if (d <= 4) {
		MobAPI.dropItem(self, 401, 1);
}   else {
}
}