const martians = {
    id: 'martians',
    title: 'Planet Mars',
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
            You decide to live with these crazy martians and they gift you your own space helmet and blaster ray. You gain 25 diplomacy points. 
        `,
        life: 0,
        diplomacy: 25
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
            You say, "nope" and get back into your ship and leave the planet as soon as possible. You gain 10 diplomacy points. 
        `,
        life: 0,
        diplomacy: 10
    }, {
        id: 'fight',
        description: 'Shoot him with an RPG!',
        result: `
            You take your chances and battle the Predator with your rocket launcher.  It's a hard fought battle, but you survive!  You lose 25 life points.
        `,
        life: -25,
        diplomacy: -10
    }, {
        id: 'friend',
        description: 'Try to become friends.',
        result: `
            You use your charm and sweet talk the Predator into showing you his camouflage technology.  You become quick friends and decide to hunt Xenomorphs together.  You gain 90 diplomacy points. 
        `,
        life: 5,
        diplomacy: 90
    }]
};

const scientology = {
    id: 'scientology',
    title: 'Planet Earth',
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
        result: `You are convinced that Tom Cruise and John Travolta know something that you don't and decide to join them to become a level 8 Scientologist. You gain 40 diplomacy points. `,
        life: 0,
        diplomacy: 40
    }, {
        id: 'leave',
        description: 'You turn around and walk out.',
        result: 'You decide that Tom Cruise isn\'t enough to convince you to join the world of Scientology and decide to leave.  You gain 20 life points.',
        life: 20,
        diplomacy: -10
    }, {
        id: 'pamphlet',
        description: 'Take a pamphlet.',
        result: 'You decide to take home some reading material and make a better assessment of this new fascinating sci-fi religion.  You lose 50 life points.',
        life: -50,
        diplomacy: 15
    }]
};

const xenos = {
    id: 'Xenos',
    title: 'Xenos',
    map: {
        top: '65%',
        left: '85%'
    },
    image: 'xenos.jpg',
    description: `
        The planet of Xenos has strange alien inhabitants that apparently are vegans.  They have transcended the need to eat meat or grow hair.  They appear friendly, yet judgemental.  Be careful.
    `,
    choices: [{
        id: 'hummus',
        description: 'Eat Hummus Together',
        result: 'You visit the Xenos\'s version of a Laughing Planet and enjoy a nice meal.  You gain 40 diplomacy points.',
        life: 20,
        diplomacy: 40
    }, {
        id: 'kill',
        description: 'Nuke the place',
        result: 'These alievegans are stronger than they appear and destroy you.  ',
        life: -200,
        diplomacy: 0
    }, {
        id: 'coexist',
        description: 'Leave',
        result: 'You decide to leave the planet never to return.  You gain 35 life points.',
        life: 35,
        diplomacy: 5
    }]
};


const quests =
    [
        martians,
        predator,
        scientology,
        xenos,
    ];

export default quests;