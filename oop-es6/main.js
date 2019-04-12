"use stict"

class Weapon {
    constructor (name, attack, durability, range, originDurability) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.originDurability = originDurability;
    };

    takeDamage(damage) {
        if (damage > this.durability) {
            this.durability = 0;
        } else {
            this.durability -= damage;
        };
    };

    
    getDamage() {
        if (this.durability >= (this.originDurability * 0.3)) {
            return this.attack
        } else if (this.durability == 0) {
            return 0
        } else {
            return this.attack / 2
        }
    };

    isBroken() {
        if (this.durability > 0) {
            return false
        } else {
            return true
        }
    }
};

const sword = new Weapon ('Старый меч', 20, 10, 1, 10);
const knife = new Weapon ('Нож', 5, 300, 1, 300);
const staff = new Weapon ('Посох', 8, 300, 2, 300);
const arm = new Weapon ('Рука', 1, Infinity, 1, Infinity);
const bow = new Weapon ('Лук', 10, 200, 3, 200);

const longBow = new Weapon ('Длинный лук', 15, bow.durability, 4, bow.durability);
const ax = new Weapon ('Секира', 27, 800, sword.range, 800);
const stormStaff = new Weapon ('Посох Бури', 10, staff.durability, 3, staff.durability);



sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);

console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(arm.getDamage());

console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(arm.isBroken());

knife.takeDamage(200);
console.log(knife.getDamage());

class Arm extends Weapon {
    constructor () {
        super('Рука', 1, Infinity, 1, Infinity);
    }
};

class Bow extends Weapon {
    constructor () {
        super('Лук', 10, 200, 3, 200);
    }
};

class Sword extends Weapon {
    constructor(){
        super('Старый меч', 20, 10, 1, 10);
    };
};

class Knife extends Weapon {
    constructor(){
        super('Нож', 5, 300, 1, 300)
    }
};

class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 2, 300);
    }
}

class LongBow extends Bow {
    constructor() {
        super(200);
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
};

class Ax extends Sword {
    constructor() {
        super(500);
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.originDurability = 800
    }
}

class StormStaff extends Staff {
    constructor() {
        super(300);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const sword1 = new Sword();
console.log(sword1);
const arm1 = new Arm();
console.log(arm1);

const longBow1 = new LongBow();
console.log(longBow1); 
const ax1 = new Ax();
console.log(ax1);
const stormStaff1 = new StormStaff();
console.log(stormStaff1);

longBow1.takeDamage(210);
console.log(longBow1.durability);
console.log(longBow1.getDamage());
console.log(longBow1.isBroken());


ax1.takeDamage(400);
console.log(ax1.durability);
console.log(ax1.getDamage());
console.log(ax1.isBroken());

stormStaff1.takeDamage(230);
console.log(stormStaff1.durability);
console.log(stormStaff1.getDamage());
console.log(stormStaff1.isBroken());
