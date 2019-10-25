
function loadUsers() {
    var listUsers = [];

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if(key.charAt(0) == 'u'){
            listUsers.push(JSON.parse(localStorage.getItem(key)))
        }
    }

    return listUsers;
} export default loadUsers;
