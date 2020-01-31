const martians = {
    id: 'martians',
    title: 'The Planet Mars',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/martians.jpg',
    description: `
        You land on this strange red rock and encounter a group of Martians that don't appear to be
        very friendly.  What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them.',
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
        diplomacy: 5
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
    title: 'The Yautja',
    map: {
        top: '57%',
        left: '20%'
    },
    image: '../assets/predator.jpg',
    description: `
        You've landed in the dense jungles of the Predators home planet.  He suddenly appears before you 
        after deactivating his camouflage and screams his battle cry.
    `,
    choices: [{
        id: 'run',
        description: 'Get back in your ship and leave.',
        result: `
            You say, "nope" and get back into your ship and leave the planet as soon as possible.
        `,
        life: 0,
        diplomacy: 10
    }, {
        id: 'fight',
        description: 'Shoot him with an RPG!',
        result: `
            You take your chances and battle the Predator with your rocket launcher.  It's a hard fought battle, but you survive!
        `,
        life: -25,
        diplomacy: -10
    }, {
        id: 'friend',
        description: 'Try to become friends.',
        result: `
            You use your charm and sweet talk the Predator into showing you his camouflage technology.  You become quick friends and decide to hunt Xenomorphs together.
        `,
        life: 5,
        diplomacy: 90
    }]
};

const scientology = {
    id: 'scientology',
    title: 'The Church of Scientology',
    map: {
        top: '31%',
        left: '55%'
    },
    image: '../assets/scientology.jpg',
    description: `
        You take a quick trip home to Earth to pick up more sandwiches and on your way to the local market notice an enormous building you haven't seen before.  Curiosity gets the best of you and you decide to enter the church to learn more.
    `,
    choices: [{
        id: 'join',
        description: 'Join themmmm.',
        result: `You are convinced that Tom Cruise and John Travolta know something that you don't and decide to join them to become
                a level 8 Scientologist.`,
        life: 0,
        diplomacy: 40
    }, {
        id: 'leave',
        description: 'You turn around and walk out.',
        result: 'You decide that Tom Cruise isn\'t enough to convince you to join the world of Scientology and decide to leave.',
        life: 20,
        diplomacy: -10
    }, {
        id: 'pamphlet',
        description: 'Take a pamphlet.',
        result: 'You decide to take home some reading material and make a better assessment of this new fascinating sci-fi religion.',
        life: -35,
        diplomacy: 15
    }]
};

// Add more quests later on

// const aliensGuy = {
//     id: 'Aliens Guy',
//     title: 'It\'s Probably Aliens',
//     map: {
//         top: '11%',
//         left: '66%'
//     },
//     image: 'aliensguy.jpg',
//     description: `
//         As you enter the quest chamber you notice three chests before you.
//         Just as you start to imagine the wealth, you see a giant serpent
//         emerge from the back of the chamber. You'll need to make a run for it,
//         but you have time to open one chest before you take off. Which one 
//         do you choose?
//     `,
//     choices: [{
//         id: 'wooden',
//         description: 'A Wooden Chest',
//         result: 'You grab 40 diplomacy pieces!',
//         life: 0,
//         diplomacy: 40
//     }, {
//         id: 'diplomacyen',
//         description: 'A diplomacyen Chest',
//         result: 'Oh no! The chest is booby trapped with poison and you take 50 life damage',
//         life: -50,
//         diplomacy: 0
//     }, {
//         id: 'jeweled',
//         description: 'A Jeweled Chest',
//         result: 'A warm light engulfs you and you gain 35 life',
//         life: 35,
//         diplomacy: 0
//     }]
// };

// const xenos = {
//     id: 'Xenos',
//     title: 'A Visit To Xenos',
//     map: {
//         top: '75%',
//         left: '35%'
//     },
//     image: 'xenos.jpg',
//     description: `
//         As you enter the quest chamber you notice three chests before you.
//         Just as you start to imagine the wealth, you see a giant serpent
//         emerge from the back of the chamber. You'll need to make a run for it,
//         but you have time to open one chest before you take off. Which one 
//         do you choose?
//     `,
//     choices: [{
//         id: 'wooden',
//         description: 'A Wooden Chest',
//         result: 'You grab 40 diplomacy pieces!',
//         life: 0,
//         diplomacy: 40
//     }, {
//         id: 'diplomacyen',
//         description: 'A diplomacyen Chest',
//         result: 'Oh no! The chest is booby trapped with poison and you take 50 life damage',
//         life: -50,
//         diplomacy: 0
//     }, {
//         id: 'jeweled',
//         description: 'A Jeweled Chest',
//         result: 'A warm light engulfs you and you gain 35 life',
//         life: 35,
//         diplomacy: 0
//     }]
// };

const quests =
    [
        martians,
        predator,
        scientology,
    ];

export default quests;