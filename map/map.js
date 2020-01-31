import { quests } from '../data/quest-data';
import { getUser } from '../data/user-setting.js';
import loadProfile, { isDead } from '../common/load-profile.js';
import { createQuestLink } from '../data/create-quest-link.js';
import completedQuest from './completed-quest.js';
import hasCompletedQuests from './has-completed-quests';


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
        questDisplay = createQuestLink(quest);

    }
    nav.appendChild(questDisplay);

}