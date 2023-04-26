//task 1
/*
const users = [

    {

        username: 'David',

        status: 'online',

        lastActivity: 10

    }, {

        username: 'Lucy',

        status: 'offline',

        lastActivity: 22

    }, {

        username: 'Bob',

        status: 'online',

        lastActivity: 104

    }

]

let onlineUsers =[];
for (variable in users){
    if(users[variable].status === 'online'){
        onlineUsers.push(users[variable]);
    }
    
}
let usersOnlineNames = [];

for (variable in onlineUsers){
    usersOnlineNames.push(onlineUsers[variable].username);
}
alert(`The following users are online now: ${usersOnlineNames.join()}`)
*/


//task 2
/*
function giveJobToStudent(object,newKey){
    object.jobName = `${newKey}`
    alert(`Congratulations! Student ${object.fullName} has a new job! It is now ${object.jobName}`)
}

const student = {

    fullName: 'Maxim',

    experienceInMonths: 12,

    stack: ['HTML', 'CSS', 'JavaScript', 'React'],

}
const updatedStudent = giveJobToStudent(student, 'web developer');
*/



//task 3
/*
function handleObject(obj,key,action){
   if(action === 'get'){
    return obj.key;
   }
   else if(action === 'add'){
    obj.emptyString = "";
    return obj;
   }
   else if(action === 'delete'){
    delete obj[key];
    return obj;
   }
   else{
    return obj;
   }
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}
 
const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result);
*/

// task 4

// function getKiller(suspectInfo,deadPeople){
 
//         for (suspect in suspectInfo) {
//             for (dead in deadPeople) {
//                 suspectInfo[suspect].forEach(element => {
//                     if(element === deadPeople[dead]){
//                         console.log(element);
//                     } 
//                 });
//                 // deadPeople[dead] === suspectInfo[suspect]
//             }
//         }
        
// }

// getKiller(
//     {
//         'James': ['Jacob', 'Bill', 'Lucas'],
//         'Johnny': ['David', 'Kyle', 'Lucas'],
//         'Peter': ['Lucy', 'Kyle'],
//     }, ['Lucas', 'Bill']
// );


//task 5

function getWinner(applicants,winnerObject)