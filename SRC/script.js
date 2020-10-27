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
