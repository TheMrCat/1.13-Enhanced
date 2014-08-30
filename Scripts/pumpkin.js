/*****************************/
/* Pumpkinhead               */
/* Zombie like monster       */
/*****************************/


var MOB_DMG_NORMAL = 2;

System.loadScript("aggressive");
System.loadScript("sounds");

function pumpkin_onUpdate() {
    mobsound_ambience(self, "pumpkin", 3);
    System.superSafeCall("aggressive", "onUpdate");
}

function pumpkin_onAttacked() {
    mobsound(self, "pumpkin");
    System.superSafeCall("aggressive", "onAttacked");
}


function pumpkin_onKill() {
    mobsound(self, "pumpkindeath");
    var d = System.rand() % 5;
    if (d == 1) {
    	MobAPI.dropItem(self, 4, 2);
}   else if (d == 2) {
    	MobAPI.dropItem(self, 4, 1);
}   else if (d == 3) {
    	MobAPI.dropItem(self, 174, 1);
}   else if (d == 4) {
    	MobAPI.dropItem(self, 174, 2);
}   else {
}
}