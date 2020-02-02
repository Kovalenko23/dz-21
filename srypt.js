class militaryResource {
    constructor (type, health, maxHealth, distance, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.distance = distance;
        this.maxDistance = maxDistance;
    }


    isReadyToMove () {
        return this.maxDistance > this.distance
    }

    isReadyToFight () {
        return this.health > 0;
    };

    restore () {
        return this.distance === 0 ? this.maxHealth : this.health
    };

    clone () {
        return new militaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance)
    };
} 