const anmone = 'Bassbaba sumon';
const tomake = "Lincoln d costa";
const eiObelay = `Sheikh Istiaque`;
const multiline = 'This is my first line \n' +
    'This is my second line \n' +
    'This is my third line \n' +
    'This is my fourth line';

const multilineNew = `This is my first line
This is my second line
This is my third line
This is my fourth line`;
const friends = ['asif', 'sakib', 'emon', 'sabbir'];
const count = 5;
const old = '<h3 class="friend-name">friend-5</h3>';
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">friend-${count}</h3>`
const new2 = `<h3 class="friend-name">friend-${friends.length}</h3>`

const first = 'arafat';
const second = 'sunny';
// const full=first+' '+second;(old system)
const full = `This person named ${first} ${second} has money of about ${friends.length * 200}`;

console.log(full);