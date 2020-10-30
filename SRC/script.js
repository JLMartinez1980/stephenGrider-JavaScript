/*
Two ways to use 'this' is ES5
.bind(this) at the end of the function
set a variable for this

=> LEXICAL 'this'
*/

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    let self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`
    }/*.bind(this)*/);
  }
};


let output = team.teamSummary();

console.log(output);

/*
Using Arrow functions to solve above problem
*/

const newTeam = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${self.teamName}`
    });
  }
};


let outputOne = newTeam.teamSummary();

console.log(outputOne);


console.log('________________________________________');

const wholeNumbers = [1, 2, 4]

let counter = 0
for (let number of wholeNumbers) {
  counter += number
}
console.log(counter)

const employees = [
  {
    name: 'me',
    date: 121212
  }, {
    name: 'you',
    date: 212121
  }
]

for (let employeeName of employees) {
  console.log('name', employeeName.name);
}

const movieReviews = {
  'movieOne': 4,
  'movieTwo': 4.2,
  'movieThree': 4.25,
  'movieFour': 4.26
};

for (let movie of Object.keys(movieReviews)) {
  console.log('movie', movie);
}
