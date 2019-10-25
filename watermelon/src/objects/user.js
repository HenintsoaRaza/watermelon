import React, { Component } from 'react';
import loadUsers from '../body/utility/loadUsers';


class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
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
        const tab = loadUsers();

        for(let i = 0; i < tab.length; i++){
            if(tab[i].id == id){
                this.copy(tab[i]) ;
            }
        }
    }

    findUserByEmail = (email) => {
        const tab = loadUsers();

        for(let i = 0; i < tab.length; i++){
            if(tab[i].email == email){
                this.copy(tab[i]) ;
            }
        }
    }

} export default User;
