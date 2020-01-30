import { quests } from '../data/quest-data';
import { getUser } from '../data/user-setting.js';
import loadProfile from '../common/load-profile.js';
import { createQuestLink } from '../data/create-quest.js';



loadProfile();

const user = getUser();

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;
}

if (user.completed[quest.id]) {
    questDisplay = createCompletedQuest(quest);
}
else {
    questDisplay = createQuestLink(quest);
}

nav.appendChild(questDisplay);