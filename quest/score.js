export default function scoreQuest(choice, questId, user) {
    // increase/decrease life from choices
    user.life += choice.life;
    // increase/decrease diplomacy from choices
    user.diplomacy += choice.diplomacy;
    // change quest to completed
    user.completed[questId] = true;
}