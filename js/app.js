$(document).ready(function(){
    var currentQuestion = 0;

    // create a question object and test it
    function Question(ask, answers, correct) {
        this.ask = ask;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.sayQuestion = function() {
        return 'Question 1: ' + this.ask + ' answers: ' + this.answers + ' correct: ' + this.correct;
    }
    window.questions = [
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
                "90th"
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

    console.log(questions[0].sayQuestion());
    for (var i in questions[0]) {
        console.log('1: ' + questions[0][i]);
    }

    for (var i = 0; i < questions.length; i++) {
        for(prop in questions[i]) {
            console.log(questions[i][prop]);
        }
    }
    // this should be an object or a method of an object
    var showQuestion = function(question) {
        //empty the current question div.question
        $('.question').empty();
        //build the new question inside div.question
        $('.question').append('<h2>' + questions[0].ask + '</h2><div class="answerGroup"></div>');
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            $('.answerGroup').append('<div class="answer"><input type="radio" name="question" id="mos-eisley" value="' + i + '"><label for="mos-eisley">' + questions[currentQuestion].answers[i] + '</label></div>');
        }
    }
    // showQuestion(questions[0]);
    function QuestionView(question) {
        this.question = question;
    }
    QuestionView.prototype.showQuestion = function() {
        //empty the current question div.question
        $('.question').empty();
        //build the new question inside div.question
        $('.question').append('<h2>' + this.question.ask + '</h2><div class="answerGroup"></div>');
        for (var i = 0; i < this.question.answers.length; i++) {
            $('.answerGroup').append('<div class="answer"><input type="radio" name="question" id="mos-eisley" value="' + i + '"> <label for="mos-eisley">' + this.question.answers[i] + '</label></div>');
        }
    }
    window.questionView = new QuestionView(questions[0]);
    window.questionView.showQuestion();
});
