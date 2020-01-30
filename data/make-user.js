export default function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        life: 25,
        diplomacy: 0,
        completed: {}
    };

    return user;
}