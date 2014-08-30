/**********************************/
/* Badlands bunny                 */
/* Mob that attacks everything heavily */
/**********************************/

var MOB_DMG_NORMAL = 3;

System.loadScript("aggressive");
System.setSuper("bad", "aggressive");

function bad_onUpdate() {
    System.superSafeCall("aggressive", "onUpdate");
}

function bad_onKill() {
	MobAPI.dropItem(self, 427, 1);
}