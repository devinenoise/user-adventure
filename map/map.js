import quests from '../data/quest-data.js';
import { getUser } from '../data/user-setting.js';
import loadProfile, { isDead } from '../common/load-profile.js';
import createQuestOnMap from './create-quest.js';
import completedQuest from './completed-quest.js';
import hasCompletedQuests from './has-completed-quests.js';


loadProfile();

const user = getUser();

if (isDead(user) || hasCompletedQuests(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;


    if (user.completed[quest.id]) {
        questDisplay = completedQuest(quest);
    }
    else {
        questDisplay = createQuestOnMap(quest);

    }
    nav.appendChild(questDisplay);

}