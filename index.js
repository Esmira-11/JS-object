//***OBJECT***
//TASK 1
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


//TASK 2
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



//TASK 3
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

// TASK 4
/*
function getKiller(suspectInfo,deadPeople){
 
        for (suspect in suspectInfo) {
            for (dead in deadPeople) {
                suspectInfo[suspect].forEach(element => {
                    if(element === deadPeople[dead]){
                        suspectInfo[suspect].forEach(element => {
                            if(element === deadPeople[dead+1]){
                                console.log(suspectInfo.suspect);
                            } 
                        })
                    }
                })
            }
        }
        
}

getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    }, ['Lucas', 'Bill']
);
*/

//TASK 5
/* 
function getRandomNumberInRange(applicants) {
    const keys = Object.keys(applicants)
    return keys[Math.floor(Math.random() * keys.length)];
}
const todaysWinner = {
    prize: '$10,000',
}
 
const winnerApplicants = {
    '001': {
        name: 'Max',
        age: 25
    },
    '201': {
        name: 'Svetlana',
        age: 20
    },
    '304': {
        name: 'Catherine',
        age: 35
    },
}
 
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); // { prize: '$10,000', name: 'Maxim', age: 25 }

function getWinner(applicants,winnerObject){
    let  random = getRandomNumberInRange(applicants);
    console.log(random)
    let spread = {
        ...winnerObject,
        ...applicants[random],
    };
    return spread;
 }
*/

//TASK 6
/*
function  giveTalonsInOrder(patients,orders){
    let newArray = [];
    for (let i=0; i<orders.length;i++){
        for(let j=0; j<patients.length;j++){
            if(patients[j].id === orders[i]){
                newArray[i]=patients[j];
            }
        }
    }
    return newArray;
}
const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Nicholas" },
    { id: 3, name: "Angelina" },
    { id: 4, name: "Vitaly" },
];
const result = giveTalonsInOrder(people, ordersArr);
for(let i=0;i<result.length;i++){
    console.log(result[i]);
}
*/

//***DATE***
//TASK 1
/*
const date = {
    day:07,
    month:11,
    year:1981
}
function  getDateFormat (date,separator){
        
        console.log((Object.values(date)).join(separator));
}
getDateFormat(date,'.');
*/

//TASK2
/*
let nextBirthdayDate=new Date(2003, 05, 23);
let today = new Date();
function getDaysBeforeBirthday(nextBirthdayDate){
    nextBirthdayDate.setFullYear(today.getFullYear());
    if (today > nextBirthdayDate) {
        nextBirthdayDate.setFullYear(today.getFullYear() + 1);
    }
    let result =Math.floor((nextBirthdayDate - today) / (1000*60*60*24));
    console.log(result);
      
}
getDaysBeforeBirthday(nextBirthdayDate);
*/


//Task 3



//***THIS*** 
//task 1
/*
const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel(n){
        let best = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
        for (let i=1;i<n;i++){
            student.stack.push(best[i]);
        }
            console.log((student.stack).join());
    }
}
student.improveLevel(5);
*/

//task 2
// 

//task 3
/*
const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack(){
        console.log(`${this.fullName} is now with the ball and starting to attack!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} scored a goal! Wow!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} goes to replace. ${newPlayer} enters the field`);
    }
}
 
const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack()
score('Siiiiii');
substitute('Paulo Dibala')
*/

