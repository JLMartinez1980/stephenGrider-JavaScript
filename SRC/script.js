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

console.log('_____________________________________________');


pick = (arr) => {
  const thisOne = Math.floor(Math.random() * arr.length);
  return arr[thisOne]
};

getCard = () => {
  const playingCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suites = ['heards', 'diamonds', 'clubs', 'spades'];

  return {
    value: pick(playingCards),
    suite: pick(suites)
  }
}

console.log('cardPick', getCard())

console.log('_____________________________________________');
//BLOCK scope

if (true) {
  let animal = 'eel';
}

//=> let and const are specefic
// => var gives access to the variable inside or outside this specefic loop
// ==> var is not scoped to any particular loop
// ===> var is not block scoped
//animal not available outside of the `if` statement


/*
var i = 10;

for (var i = 0; i < something.length; i++) {
console.log(i) => returns index
}

console.log(i) => returns the last element of the loop, not the global index
 */

 console.log('_____________________________________________');
//can list params in any order

//got to list the keys, not the values.
signUp = ( {name, password, email, dateOfBirth, city} ) => {
return `The test ${name}, ${email}`
}


const user = {
  name: 'myName',
  password: 'myPassword',
  email: 'something@something.com',
  dateOfBirth: 1/1/2000,
  city: 'here'
}

const signUpOutput = signUp(user);
console.log('sign', signUpOutput);

console.log('_____________________________________________');

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]

//how to change into an object with x and y as keys

const findLocation = points.map( ( [x, y] ) => {
  return {x, y}
})

console.log('pointes', findLocation)

console.log('_____________________________________________');

function add(x, y) {
return x + y;
}

subtract = (x,y) => {
  return x - y;
}

const divide = (x, y) => {
  return x / y;
};

const multiply = function(x, y) {
  return x * y;
}

const operations = [add, subtract, divide, multiply];

for (let func of operations) {
  console.log(`func:`, func(30,5))
};

console.log('_____________________________________________');

callTwice = (func) => {
  func();
  func();
}

const cry = () => {
  console.log('no')
}

console.log(callTwice(cry))


console.log('_____________________________________________');

const repeatNTimes = (action, num) => {
  for (let i = 0; i < num; i++) {
    action();
  }
}

console.log('test', repeatNTimes(cry, 4));

console.log('_____________________________________________');

makebetween = (x, y) => {
  return function(num) {
    return num >= x && num <= y
  }
};

const isNiceWeather = makebetween(80, 85);
console.log(isNiceWeather(83));

console.log('_____________________________________________');

const grumpus = () => {
  alert('grumpy');
}

// setTimeout(function(){
//   alert("I'm grumpy")
// }, 5000);
// console.log('tester', grumpus);


const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('I said not to click');
})

console.log('_____________________________________________');

const books = [
  {
    title: 'Good',
    authors: ['john', 'jim'],
    rating: 7,
    genre: 'fiction'
  },
  {
    title: 'bad',
    authors: ['Sam', 'Samantha'],
    rating: 7,
    genre: 'fantasy'
  },
  {
    title: 'ugly',
    authors: ['Jack', 'Jill'],
    rating: 5,
    genre: 'fantasy'
  },
  {
    title: 'someday',
    authors: ['James', 'jim'],
    rating: 3,
    genre: 'fiction'
  },
  {
    title: 'today',
    authors: ['No', 'Yes'],
    rating: 6,
    genre: 'horror'
  },
]

//find ratings greater than 4 => will return the first book to make the criteria

const ratings = books.find( book => book.rating >= 4);
console.log(`book:`, ratings)

const findGenre = books.filter( book => book.genre.includes('fantasy'));
console.log('find', findGenre);

const findTitle = books.filter( book => book.title === 'today');
console.log('findTitle', findTitle);

const allTheSameGenre = books.every( book => book.genre === 'fiction');
console.log('all', allTheSameGenre);

const someTheSameGenrea = books.some( book => book.genre === 'fiction');
console.log('some', someTheSameGenrea)


const randomNums = [1, 22, 456, 34, 943, 1000, 3];

const smallNums = randomNums.sort((a,b) => a - b);
console.log(`smallNums: ${smallNums}`);
const largeNums = randomNums.sort( (a,b) => b - a);
console.log(`largeNums: ${largeNums}`);

const grades = [ 88, 77, 92, 93, 84];

const maxGrades = grades.reduce( (max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max
}, 0);

const minGrades = grades.reduce( (min, currentValue) => {
  return Math.min(min, currentValue) //can do the same for Max
})

console.log(`maxGrades: ${maxGrades}`)

const votes = ['y', 'y', 'n', 'n', 'n', 'y', 'n', 'y', 'y', 'n', 'n', 'n', 'n', 'y'];

const tallyVotes = votes.reduce( (acc, current) => {
  if (acc[current]) {
    acc[current]++
  } else {
    acc[current] = 1;
  }
  return acc;
}, {})

console.log('tallyVotes', tallyVotes);

const categorizeBooksByRating = books.reduce( (acc, book) => {
  const key = Math.floor(book.rating);

  if (!acc[key]) { acc[key] = [] };

  acc[key].push(book);

  return acc;
}, {})

console.log('categorizeBooksByRating', categorizeBooksByRating);

const spreadNums = [1, 4, 6, 19, 45, 32];
//spread takes away the array brackets

Math.max(spreadNums);  //undefined
Math.max(...spreadNums); //breaks each element into an single numbers

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gatropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cinidaira = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...cinidaira];
console.log(`mollusca: ${mollusca}`);

console.log('_____________________________________________');

const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true
}

const dog = {
  ...canine,
  isPet: true,
}

console.log('dog', dog);

const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

//create a variable to house the first movieThree using Index not preferred way

const [gold, silver, bronze] = raceResults;

console.log(`gold: ${gold}`);

const [first, , , fourth] = raceResults;
console.log(`fourth: ${fourth}`);

const [winner, ...others] = raceResults;
console.log(`others: ${others}`);

//objects
const runners = {
  first: 'Eluid',
  last: 'Kipchage',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heard of Kenya'
};

const {firstN, lastN, country} = runners;

console.log('country:', country);

// const raceResultsObj = [
//   {
//   firstName: "Euid",
//   lastName: 'Kipchage',
//   country: 'Kenya'
//   },
//   {
//   firstName: 'Feyisa',
//   lastName: 'Lilesa',
//   country: 'Ethiopia'
//   },
//   {
//   firstName: 'Galen',
//   lastName: 'Rupp',
//   country: 'United States'
//   }
// ];
//
// console.log(raceResultsObj);
//
// const [, {country}] = raceResultsObj;
// console.log('firstN', first);

//computed properties

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Directer';
const person2 = "James Cameron"
const directerTeam = {
  [role]: person,
  [role2]: person2
}
console.log('team', directerTeam);

//add methods (functions) to objects

const mathFormulas = {
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  square: x => Math.pow(x, 2)
};

console.log(`Math:`, mathFormulas);

//figuring out the shorthand

console.log('________________________________________');

//KEYWORD 'this'

function sayHi() {
  console.log('hi');
  console.log(this);
}

//In the above function 'this' refers to the Window objects

const thisGreet = function() {
  console.log(this);
};

const famousPerson = {
  first: 'Cherilyn',
  last: 'Sarkisisan',
  nickName: 'Cher',
  fullName() {
    const {first, last, nickName} = this
    return `${first}, ${last}, AKA ${nickName}`
  },
  printBio() {
    const fullName = this.fullName();

    console.log(`${fullName} is a person`)
  },
  laugh: () => {
    console.log('this', this);
    //This points to the window object
    console.log('test', `${this.nickName}`);
  }
}




const annoyer = {
  phrases: ['literally', 'cray cray', 'Not even', 'YOLO', "Can't stop won't stop"],
  pickPhrase() {
    const {phrases} = this;
    const idx =  Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    console.log('this', this.pickPhrase)
    this.timerId = setInterval( () => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log('end');
  }
}




//first with a function

// const makeDeck = () => {
//   const deck = [];
//   const suits = ["Heart", "Diamon", "Club", "Spade"];
//   const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//
//   for (let value of values.split(',')) {
//     for (let suit of suits) {
//       deck.push({
//         suit,
//         value
//       })
//     }
//   }
//   return deck
// }

//now with an object
const dealersDeck = {
  deck: [],
  currentHand: [],
  suits: ["Heart", "Diamon", "Club", "Spade"],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initilizeDeck() {
    const {deck, suits, values} = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          suit,
          value
        })
      }
    }
    return deck
  },
  drawCard() {
    const {deck, currentHand} = this;
    const draw = deck.pop();
    return currentHand.push(draw);
  },
  drawMultipleCards(cardArray) {
    const cards = [];
    for (let i = 0; i < cardArray; i++) {
      cards.push(dealersDeck.drawCard());
    }
    return cards;
  },
  shuffleCards() {
    const {deck} = this
    for (let i = deck.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}
