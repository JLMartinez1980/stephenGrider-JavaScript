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

console.log("________________________________________");

isPurple = (color) => {
  if (color.toLowerCase() === 'purple') {
    return true;
  } else {
    return false;
  }
}

/* REFACTORED
True / False simple
*/

isBlue = (color) => {
  if (color.toLowerCase() === 'purple') {
    return true;
  }
  return false;
}

/* FURTHER REFACTORED
True / False simple
*/

isPink = (color) => {
  return color.toLowerCse() === 'red';
};

containsPurple = (arr) => {
  const findColors = arr.map( (color) => {
    if (color === 'color' || color === '2ndColor') {
      return true;
    }
  })
  return false;
}


/*
Write a function 2 arguments password and username
  password cannot have the username, must have no spaces, at atleast 8 char

*/

isValidPassword = (userName, passWord) => {
  passWord = JSON.stringify(passWord);
  let noUserName = true;
  let noSpace = true;
  let correctLength = passWord.length >= 8

  if (passWord.indexOf('userName')) {
      noUserName = false;
  };
  if (!passWord.indexOf(' ') >= 0) {
    noSpace = false;
  }

  if (noUserName && noSpace && correctLength) {
    return true;
  }
  return false;
};

console.log('tester', isValidPassword('J a mes', 123456789));


console.log('_______________________________________________');

const defaultColors = ['red', 'green'];
const favoriteColors = ['orange', 'yellow'];

['blue', ...defaultColors, ...favoriteColors];


function product(...numbers) {
  var numbers = [...numbers];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

const productOutput = product(1,2,3,4,5);
console.log("product", productOutput);

//destructoring objects

const expense = {
  type: 'Business',
  amount: '$44.00'
}

// const type = expense.type;
// const amount = expense.amount;

const { type, amount } = expense;
//variable name must be identical,
console.log('type', type, 'amount', amount);

const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

fileSummmary = ({name, extension, size}) => {
  return `${name}, ${extension}, ${size}`
}

console.log(fileSummmary(savedFile));

//destructur arrays => getting individual elements


//develop an function to find the avg of an array of wholeNumbers


findAvg = (nums) => {
  const average = nums.reduce( (prev, num) => prev + num / nums.length ,0)
  return average;
}
const avgerageOutput = findAvg([75,76,80,95,100]);
console.log(`avgerageOutput: ${avgerageOutput}`);
//85.2

console.log('_____________________________________________');

//write a function to to test if a sentence is a pangram;

inPangram = (str) => {
  const regex = /([a-z])(?!.*\1)/gi;

  return (str.match(regex) || []).length === 26;
}
const pangramOutput = inPangram("The quick brown fox jumps over the lazy dog");
console.log(`pangramOutput: ${pangramOutput}`);
