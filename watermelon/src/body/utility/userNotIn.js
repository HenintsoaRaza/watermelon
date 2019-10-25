function userNotIn(listUsers, email){
    for(let i = 0; i < listUsers.length; i++){
        if(listUsers[i].email == email){
            return false;
        }
    }
    return true;
}export default userNotIn;