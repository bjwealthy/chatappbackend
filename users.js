const users = [];

const addUser = ({id, name, room}) => {
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);
    //if there exists a user with same credentials
    if(existingUser){
        return{error: 'That username is taken for this room'}
        }
    //if there's no user with same credentials
    const user = {id, name, room}
    users.push(user); 
    return {user} //so we know exactly which user was pushed
    }

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room); 

module.exports = {addUser, removeUser, getUser, getUsersInRoom};