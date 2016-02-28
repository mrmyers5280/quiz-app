$(document).ready(function(){
	var questionNumber = 0;
	var userAnswer = 0;
	var numCorrect = 0;
	var questionElement = $('.question');

	// create a question object and test it
	function Question(prompt, answers, correct) {
		this.prompt = prompt;
		this.answers = answers;
		this.correct = correct;
	}
	// questions array of objects - 'window.' added for debugging
	questions = [
		new Question(
			"In Star Wars, A New Hope, in which spaceport was the cantina?",
			[
				"Mos Eisley",
				"Los Eisley",
				"Tattoine",
				"Anchorhead"
			],
			0
		),
		new Question(
			"The movies Tron: Legacy (2010) and Oblivion (2013) have which person in common?",
			[
				"Actor, Tom Cruise",
				"Actor, Jeff Bridges",
				"Director, Joseph Kosinski",
				"Soundtrack Artist, M83"
			],
			2
		),
		new Question(
			"In The Godfather II, to which city does Don Corleone relocate his family?",
			[
				"Las Vegas",
				"Reno",
				"Atlantic City",
				"Lake Tahoe"
			],
			3
		),
		new Question(
			"In Lord of the Rings: Fellowship of the Ring, what birthday is Bilbo celebrating?",
			[
				"115th",
				"111th",
				"100th",
				"99th"
			],
			1
		),
		new Question(
			"In John Carter, to which planet in our solar system does the name 'Barsoom' refer?",
			[
				"Venus",
				"Earth",
				"Mars",
				"Jupiter"
			],
			2
		)
	];

	// showQuestion(questions[0]);
	function QuizView(question, element) {
		this.question = question;
		this.element = element;
	}
	QuizView.prototype.showQuestion = function() {
		//empty the current question div.question
		questionElement.empty();
		if (this.question != null) {
			//build the new question inside div.question
			questionElement.append('<h2>' + this.question.prompt + '</h2><div class="answerGroup"></div>');
			for (var i = 0; i < this.question.answers.length; i++) {
				$('.answerGroup').append('<div class="answer"><input type="radio" name="question" id="answer-' + i + '" value="' + i + '"> <label for="answer-' + i + '">' + this.question.answers[i] + '</label></div>');
			}
		} else {
			// let user know they've completed the Quiz
			questionElement
				.append('<h2>Congratulations, you finished the quiz!</h2>')
				.append('<h2>You got ' + numCorrect + ' right. Way to go!</h2>');
		}
		// display question num of total questions
		if (questionNumber >= questions.length) {
			$('.questionNum').text(questions.length);
		} else {
			$('.questionNum').text(questionNumber + 1)
		}
	}

	QuizView.prototype.attachEventHandlers = function() {
		// add a listener to the Submit Button
		$('.submitButton').on('click', 'button', function() {
			console.log('.submitButton button');
			// get the answer value and store it to be used in Quiz obj
			userAnswer = $('input[name=question]:checked', '.answer').val();
			console.log('userAnswer: ' + userAnswer);
			// call the next question
			console.log('questionNumber: ' + questionNumber);
			quizControl = new Quiz(questions[questionNumber]);
			quizControl.checkAnswer();
			questionNumber++;
			quizControl.nextQuestion();
		});
		$('.resetButton').on('click', 'button', function() {
			console.log('.resetButton button');
			questionNumber = 0;
			quizControl = new Quiz(questions[questionNumber]);
			quizControl.nextQuestion();
			numCorrect = 0;
			$('.correct span').text(numCorrect);
		});
	}

	function Quiz(question) {
		this.question = question;
		// this.questionNumber = questionNumber;
		// this.userAnswer = userAnswer;
	}
	Quiz.prototype.nextQuestion = function() {
		questionView = new QuizView(questions[questionNumber]);
		questionView.showQuestion(questions[questionNumber]);
	}
	Quiz.prototype.checkAnswer = function() {
		console.log('numCorrect before if: ' + numCorrect);
		if(parseInt(userAnswer) === questions[questionNumber].correct) {
			numCorrect++;
		}
		console.log('numCorrect after if: ' + numCorrect);
		// update num correct
		$('.correct span').text(numCorrect);
	}
	questionView = new QuizView(questions[questionNumber], $('.main'));
	questionView.showQuestion(questions[questionNumber]);
	$('.totalQuestions').text(questions.length);
	questionView.attachEventHandlers();
});
