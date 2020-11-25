var readlinesync = require('readline-sync');
var chalk = require('chalk');
score = 0;
console.log(
	chalk.bgRedBright.white('press enter after answering the question')
);
console.log(
	chalk.bgRedBright.bgYellow('which is on bottom right of your keypad')
);
var username = readlinesync.question('what is your name?\n ');

console.log(
	'welcome ' +
		chalk.underline.bold(username) +
		' to ' +
		chalk.bgWhite.black.bold('THE OFFICE') +
		' QUIZ'
);
console.log(chalk.bgWhiteBright.red('\nenter only option'));

function play(question, answer) {
	var userans = readlinesync.question(question);
	console.log('you answered ' + userans);

	if (userans == answer) {
		console.log('yay! you guessed it correct!');
		score = score + 1;
		console.log('your score is ', score);
	} else {
		console.log('its incorrect!');
		console.log('the correct answer is: ', answer);
		console.log('your score is ', score);
	}
}

var questions = [
	{
		question:
			chalk.bold.white.bgMagenta(
				'what is the name of the office, in the series THE OFFICE?\n'
			) +
			chalk.bold.yellowBright('a: scratoncity\n') +
			chalk.bold.yellowBright('b: paperlist\n') +
			chalk.bold.yellowBright('c: dunder miffilin\n') +
			chalk.bold.yellowBright('d: paper co.\n'),
		answer: 'c'
	},

	{
		question:
			chalk.bold.white.bgMagenta('jim had a crush on whom?\n') +
			chalk.bold.yellowBright('a: jan\n') +
			chalk.bold.yellowBright('b: pam\n') +
			chalk.bold.yellowBright('c: meridith\n') +
			chalk.bold.yellowBright('d: angela\n'),
		answer: 'b'
	},

	{
		question:
			chalk.bold.white.bgMagenta(
				'who was the ASSISTANT TO THE REGIONAL MANAGER?\n'
			) +
			chalk.bold.yellowBright('a: jim\n') +
			chalk.bold.yellowBright('b: pam\n') +
			chalk.bold.yellowBright('c: kevin\n') +
			chalk.bold.yellowBright('d: dwight\n'),
		answer: 'd'
	},

	{
		question:
			chalk.bold.white.bgMagenta('what is the middle name of dwight?\n') +
			chalk.bold.yellowBright('a: a\n') +
			chalk.bold.yellowBright('b: k\n') +
			chalk.bold.yellowBright('c: r\n') +
			chalk.bold.yellowBright('d: p\n'),
		answer: 'b'
	},

	{
		question:
			chalk.bold.white.bgMagenta('who set the office on fire?\n') +
			chalk.bold.yellowBright('a: ryan\n') +
			chalk.bold.yellowBright('b: stanley\n') +
			chalk.bold.yellowBright('c: michael\n') +
			chalk.bold.yellowBright('d: oscar\n'),
		answer: 'a'
	},

	{
		question:
			chalk.bold.white.bgMagenta(
				'what was the name of cat that dwight killed?\n'
			) +
			chalk.bold.yellowBright('a: kitty\n') +
			chalk.bold.yellowBright('b: sprinkles\n') +
			chalk.bold.yellowBright('c: pamila\n') +
			chalk.bold.yellowBright('d: cupcake\n'),
		answer: 'b'
	},

	{
		question:
			chalk.bold.white.bgMagenta('who dates pams mother?\n') +
			chalk.bold.yellowBright('a: kevin\n') +
			chalk.bold.yellowBright('b: stanley\n') +
			chalk.bold.yellowBright('c: michael\n') +
			chalk.bold.yellowBright('d: jim\n'),
		answer: 'c'
	},

	{
		question:
			chalk.bold.white.bgMagenta(
				'who can raise and lower its cholestrol level by their will?\n'
			) +
			chalk.bold.yellowBright('a: dwight\n') +
			chalk.bold.yellowBright('b: jim\n') +
			chalk.bold.yellowBright('c: michael\n') +
			chalk.bold.yellowBright('d: ryan\n'),
		answer: 'a'
	}
];
for (var i = 0; i < questions.length; i++) {
	console.log('-------------------------------');
	console.log('question number: ' + (i + 1));
	play(questions[i].question, questions[i].answer);
}
console.log('-------------------------------');
console.log(chalk.bgYellow('your total score is: ', score));
console.log('-------------------------------');
console.log('thank you ' + username + ' for playing!');
var leaderboard = [
	{
		player: chalk.bold.black.bgWhiteBright('tanay=8/8')
	},
	{
		player: chalk.bold.black.bgWhiteBright('khusharth=8/8')
	},
	{
		player: chalk.bold.black.bgWhiteBright('aryan=7/8')
	}
];
console.log(chalk.bgRedBright('leaderboard!!:'));
for (var i = 0; i < leaderboard.length; i++) {
	console.log(leaderboard[i].player);
}
console.log(
	'this is the leaderboard, \nif you have crossed the highest score, \ndo dm me the screenshot, ill put your name in the leaderboard!!'
);
