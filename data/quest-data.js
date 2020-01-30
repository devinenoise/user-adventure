const martians = {
    id: 'martians',
    title: 'Martians',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'martians.jpg',
    description: `
        You land on this strange red rock and encounter a group of Martians that don't appear to be
        very friendly.  What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Because you had a career in hostage negotiations back on Earth, you are able to work out a 
            bargain with the Martians that allows you to leave their planet as soon as possible.  You gain 35 diplomacy points.
        `,
        life: 0,
        diplomacy: 35
    }, {
        id: 'fight',
        description: 'Attack them with your blaster pistol.',
        result: `
            You brandish your TSM-1000 red blaster pistol and fire off three quick blasts at the Martians.  They
            use their advanced alien weaponry to do you harm.  You lose 30 life.
        `,
        life: -30,
        diplomacy: 50
    }, {
        id: 'move-in',
        description: 'Build a home on mars and co-exist with the martians and eat donuts all day.',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 life damage.
        `,
        life: -15,
        diplomacy: 15
    }]
};

const predator = {
    id: 'predator',
    title: 'The Predator',
    map: {
        top: '57%',
        left: '20%'
    },
    image: 'predator.jpg',
    description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 diplomacy.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 life damage. 
        `,
        life: -35,
        diplomacy: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 life damage.
        `,
        life: -45,
        diplomacy: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 diplomacy.
        `,
        life: 0,
        diplomacy: 90
    }]
};

const scientology = {
    id: 'scientology',
    title: 'The Scientology Museum',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'scientology.jpg',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 diplomacy pieces!',
        life: 0,
        diplomacy: 40
    }, {
        id: 'diplomacyen',
        description: 'A diplomacyen Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 life damage',
        life: -50,
        diplomacy: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 life',
        life: 35,
        diplomacy: 0
    }]
};

const aliensGuy = {
    id: 'Aliens Guy',
    title: 'It\'s Probably Aliens',
    map: {
        top: '11%',
        left: '66%'
    },
    image: 'aliensguy.jpg',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 diplomacy pieces!',
        life: 0,
        diplomacy: 40
    }, {
        id: 'diplomacyen',
        description: 'A diplomacyen Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 life damage',
        life: -50,
        diplomacy: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 life',
        life: 35,
        diplomacy: 0
    }]
};

const xenos = {
    id: 'Xenos',
    title: 'A Visit To Xenos',
    map: {
        top: '75%',
        left: '35%'
    },
    image: 'xenos.jpg',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 diplomacy pieces!',
        life: 0,
        diplomacy: 40
    }, {
        id: 'diplomacyen',
        description: 'A diplomacyen Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 life damage',
        life: -50,
        diplomacy: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 life',
        life: 35,
        diplomacy: 0
    }]
};

const quests =
    [
        martians,
        predator,
        scientology,
        aliensGuy,
        xenos
    ];

export default quests;