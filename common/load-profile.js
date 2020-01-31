import { getUser } from '../data/user-setting.js';

export function isDead(user) {
    return user.life <= 0;
}

// grabs dom
export default function loadProfile() {
    const name = document.getElementById('name');
    const life = document.getElementById('life');
    const diplomacy = document.getElementById('diplomacy');

    // connect the user with the JSON data in local storage
    const user = getUser();

    // if no user created go back to the sign up page
    if (!user) window.location = './';

    // display the user profile on the dom
    name.textContent = user.name + ' -- ';
    diplomacy.textContent = user.diplomacy;
    // check to see the value of life from the isDead function
    if (isDead(user)) {
        life.textContent = 'DEAD';
        life.classList.add('red');
    }
    else {
        life.textContent = user.life;
        life.classList.add('green');
    }
}