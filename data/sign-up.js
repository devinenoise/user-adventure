import { saveUser } from './user-setting.js';
import makeUser from './make-user.js';

// getting some DOM
const userSignUp = document.getElementById('user-sign-up');

// form submit event
userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    // creating the form object with FormData
    const formData = new FormData(userSignUp);

    // saving the new user
    const user = makeUser(formData);
    saveUser(user);

    // moving the user to the map page
    window.location = './map';

});