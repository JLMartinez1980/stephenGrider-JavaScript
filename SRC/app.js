const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
];

const fanList = document.createElement('h1');
fanList.innerText = 'Golden State Warriors';
document.body.appendChild(fanList);



awayTeamInfo = (warriorsGames) => {
  const awayTeamObj = warriorsGames.map( (away) => {
    const teamName = away.awayTeam.team;
    console.log('teamName', teamName);
    if (teamName === 'Golden State') {

    }
    const pointsScored = away.awayTeam.points;
    const outCome = away.awayTeam.isWinner;

    return {
      teamName,
      pointsScored,
      outCome
    }
  })

  return awayTeamObj;
}

const allAwayGames = awayTeamInfo(warriorsGames);
const createRecord = document.createElement('ul');
createRecord.innerHTML = '<b>Away Teams</b>'
document.body.appendChild(createRecord);

for (let i = 0; i < allAwayGames.length; i++) {

  console.log('all', allAwayGames[i].outCome === false)
  const listInfo = document.createElement('li');
  listInfo.innerHTML = allAwayGames[i].teamName;
  createRecord.appendChild(listInfo);



  const points = document.createElement('li');
  points.innerHTML = allAwayGames[i].pointsScored;
  createRecord.appendChild(points)

  const whoWon = document.createElement('li');

  whoWon.innerHTML = allAwayGames[i].outCome;
  createRecord.appendChild(whoWon);
  whoWon.setAttribute('id', 'outCome')

  console.log('whoWon', whoWon)
  if (allAwayGames[i].outCome === true) {
    whoWon.setAttribute('style', 'color: #7FFF00');
  };
  if (allAwayGames[i].outCome === false) {
    whoWon.setAttribute('style', 'color: #DC143C');
  };

  if (allAwayGames[i].teamName === 'Golden State') {
    listInfo.setAttribute('style', 'color: #FFD700');
  };

  if (allAwayGames[i].teamName !== 'Golden State') {
    listInfo.setAttribute('style', 'color: #191970');
  };

  if (allAwayGames[i].outCome !== true) {
    whoWon.innerText = "LOST"
  }

  if (allAwayGames[i].outCome === true) {
    whoWon.innerText = "WIN"
  }



}





const listInfo = document.createElement('li');
listInfo.innerHTML = awayTeamInfo(warriorsGames).teamName;
createRecord.appendChild(listInfo);
