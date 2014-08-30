function mobsound_ambience(mob, mobname, count) {
	if ((System.rand() % 52) > 0) return; //don't always play a sound, that would be annoying!

	var soundID = 1+(System.rand()%count); //1 or 2
	var sound = mobname + soundID; //sound name
	var location = MobAPI.getLocation(mob); //needed for volume damping

	MobAPI.playSound(location, sound);
}

function mobsound(mob, soundname) {
	var location = MobAPI.getLocation(mob); //needed for volume damping
	MobAPI.playSound(location, soundname);
}
