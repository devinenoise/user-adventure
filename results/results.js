import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/user-setting.js';
import scoreLife from './score-life.js';
import scoreDiplomacy from './score-diplomacy.js';
import { lifeMsgs, winMsgs, loseMsgs } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const lifeResult = scoreLife(user.life); 
const diplomacyResult = scoreDiplomacy(user.diplomacy);
const lifeMsg = lifeMsgs[lifeResult];

let diplomacyMsgs = null;
if (lifeResult === 'dead') {
    diplomacyMsgs = loseMsgs;
}
else {
    diplomacyMsgs = winMsgs;
}

const diplomacyMsg = diplomacyMsgs[diplomacyResult];

let story = 'You have traversed the the galaxy, ';
story += user.name + `. `;
story += lifeMsg + ' and ' + diplomacyMsg + '.';

storyDisplay.textContent = story;