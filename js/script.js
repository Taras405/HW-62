import users from './data.js';

const getUserNames = users.map(user => user.name);
console.log(getUserNames);



const getUsersWithEyeColor = (users, color) => {
    return users.filter(users => users.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));



const getUsersWithGender = (users, gender) => {
    return users.filter(users => users.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));



const getInactiveUsers = users.filter(inactive => !inactive.isActive).map(user => user.name);
console.log(getInactiveUsers);



const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email).name;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));