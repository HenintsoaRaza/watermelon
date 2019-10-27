class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    loadUsers = () => {
        var listUsers = [];

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.charAt(0) == 'u') {
                var u = new User();
                u.copy(JSON.parse(localStorage.getItem(key)));
                listUsers.push(u);
            }
        }

        return listUsers;
    }

    userNotIn(email){
        var listUsers = this.loadUsers();
        for(let i = 0; i < listUsers.length; i++){
            if(listUsers[i].email == email){
                return false;
            }
        }
        return true;
    }

    saveUser = function () {
        //save the user in the localstorage
        var key = 'u'.concat(this.id);
        var obj = JSON.stringify(this);
        localStorage.setItem(key, obj);
    }

    copy = (obj) => {
        this.id = obj.id;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
        this.password = obj.password;
    }

    findUserById = (id) => {
        const tab = this.loadUsers();

        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id == id) {
                this.copy(tab[i]);
            }
        }
    }

    findUserByEmail = (email) => {
        const tab = this.loadUsers();

        for (let i = 0; i < tab.length; i++) {
            if (tab[i].email == email) {
                this.copy(tab[i]);
            }
        }
    }

    existEmail = (email) => {
        const tab = this.loadUsers();

        for (let i = 0; i < tab.length; i++) {
            if (tab[i].email == email) {
                return tab[i].id;
            }
        }

        return null;
    }


} export default User;
