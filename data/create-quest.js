export default function createQuest(quest) {

    //create an anchor tag
    const link = document.createElement('a');

    //adding the quest class
    link.classList.add('quest');

    //href location will be added plus the quest object id
    link.href = '../quest/?id=' + quest.id;

    //setting the location of the link on the map
    link.style.top = quest.map.top;
    link.style.bottom = quest.map.bottom;
    link.textContent = quest.title;

    return link;

}