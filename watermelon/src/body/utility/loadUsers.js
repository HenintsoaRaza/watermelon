import user from '../../objects/user.js';

function loadUsers() {
    var listUsers = [];

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if(key.charAt(0) == 'u'){
            var u = new user();
            u.copy(JSON.parse(localStorage.getItem(key)));
            listUsers.push(u);
        }
    }

    return listUsers;
} export default loadUsers;
