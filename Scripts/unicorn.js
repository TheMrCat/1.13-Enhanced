/*****************************/
/* Unicorn                   */
/* Critter with custom drops */
/*****************************/


var MOB_DMG_NORMAL = 1;

System.loadScript("critter");
System.loadScript("sounds");
System.setSuper("unicorn", "critter");

function unicorn_onUpdate() {
	mobsound_ambience(self, "unicorn", 2);
	System.superSafeCall("critter", "onUpdate");
}

function unicorn_onAttacked() {
	mobsound(self, "unicornhit");
	System.superSafeCall("critter", "onAttacked");
}

function unicorn_onKill() {
	mobsound(self, "unicorndeath");
    if (System.rand() % 2)
        MobAPI.dropItem(self, 403, 1);
    else
        MobAPI.dropItem(self, 424, 1);
}