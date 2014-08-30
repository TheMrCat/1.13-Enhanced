/**********************************************************************/
/* Api description file, useful for classpath/documentation purposes. */
/* Should NOT be loaded.                                              */
/**********************************************************************/

/**
 * The current MobPointer, which invoked the script.
 * @type MobPointer,EntityPointer
 */
var self;

var System = {
    /**
     * Loads a new script from assets/Scripts/, invoking this method several times will not load it again.
     * @param String The name of the script to be loaded.
     */
    loadScript: function(script) {/*native*/},

    /**
     * Creates a random positive integer.
     * @returns Integer
     */
    rand: function() {/*native*/},

    /**
     * Logs a message to the console/logcat.
     * @param String The message to post.
     */
    log: function(msg) {/*native*/},

    /**
     * Assigns a super namespace to the given namespace.
     * @param nspace The namespace to assign the super to.
     * @param super The super namespace to add.
     */
    setSuper: function(nspace, super) {/*native*/},

    /**
     * Calls a function in the super namespace.
     * @param nspace The namespace to call the method in (or its super, if needed)
     * @param func The function to call.
     */
    superSafeCall: function(nspace, func) {/*native*/}
};

var MobAPI = {
    /**
     * Gets the current world time.
     * @returns float
     */
    getWorldTime: function() {/*native*/},

    /**
     * Gets all the mobs within range, doesn't mean they can be seen.
     * @param EntityPointer The entity to check its neighbors of.
     * @returns Array of EntityPointers
     */
    getCloseMobs: function(entity) {/*native*/},

    /**
     * Checks wether an entity can see another.
     * Warning: Heavy method, not meant to be "spammed". It is recommended to use distanceTo before doing this.
     * @param EntityPointer The mob which wants to see.
     * @param EntityPointer The target to see.
     * @returns boolean
     */
    canSee: function(self, target) {/*native*/},

    /**
     * Calculates the distance between 2 entities.
     * @param EntityPointer First entity
     * @param EntityPointer Second entity
     * @returns Integer, distance in blocks
     */
    distanceTo: function(entity1, entity2) {/*native*/},

    /**
     * Gets the spawn location of this mob.
     * @param MobPointer The mob to get the spawn location of.
     * @returns array of coordinates, example: [586,63,-2313]
     */
    getSpawn: function(mob) {/*native*/},

    /**
     * Gets the location of an entity.
     * @param EntityPointer entity
     * @returns array of coordinates, example: [586,63,-2313]
     */
    getLocation: function(entity) {/*native*/},

    /**
     * Checks if a mob is of type.
     * @param EntityPointer The entity to check its type of.
     * @param String The type of entity, usually equals the script name.
     * @returns boolean
     */
    isType: function(entity, type) {/*native*/},

    /**
     * Sets a mobs target coordinates, invoking the pathfinding algorithm.
     * Warning: Heavy method, not meant to be "spammed".
     * @param MobPointer The mob to move.
     * @param array of coordinates, example: [586,63,-2313]
     * @returns boolean, wether the path could be found.
     */
    setTarget: function(self, location) {/*native*/},

    /**
     * Sets a mobs target coordinates, invoking the pathfinding algorithm.
     * Warning: Heavy method, not meant to be "spammed".
     * @param MobPointer The mob to move.
     * @param EntityPointer The entity to move too.
     * @returns boolean, wether the path could be found.
     */
    setTargetEntity: function(self, entity) {/*native*/},

    /**
     * Attack an entity.
     * @param EntityPointer The attacking mob.
     * @param EntityPointer The victim.
     * @param Float The amount of damage to do. See the MOB_DMG variables in constants.
     * @return If the target died.
     */
    attack: function(self, target, damage) {/*native*/},
    
    /**
     * Plays a sound.
     * @param array of coordinates, example: [586,63,-2313]
     * @param string sound
     */
    playSound: function(location,sound) {/*native*/},
    
    /**
     * Makes the mob drop an item.
     * @param The mob that drops the item.
     * @param item id
     * @param amount of items
     */
    dropItem: function(self,id,amount) {/*native*/},

    /**
     * Gets a variable to this mob, persistent across this runtime.
     * @param MobPointer The mob to get the var from.
     * @param String Variable name.
     * @returns The value.
     */
    getVar: function(self, key) {/*native*/},

    /**
     * Assigns a variable to this mob, persistent across this runtime.
     * @param MobPointer The mob to get the var from.
     * @param String Variable name.
     * @param mixed The value.
     */
    setVar: function(self, key, value) {/*native*/},

    /**
     * Removes a variable from the mob's variables.
     * @param MobPointer self
     * @param String key
     * @returns The old variable.
     */
    eraseVar: function(self, key) {/*native*/}
};
