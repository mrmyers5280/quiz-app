// create a question objects and test it
function Question(ask, answers, correct) {
    this.ask = ask;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.sayQuestion = function() {
    return "Question 1: " + this.ask + " answers: " + this.answers + " correct: " + this.correct;
}
var question1 = new Question("In Star Wars, A New Hope, in which spaceport was the cantina?", ["Mos Eisley", "Los Eisley", "Tattoine", "Anchorhead"], 0);

var question2 = new Question("The movies Tron: Legacy (2010) and Oblivion (2013) have which person in common?", ["Actor, Tom Cruise", "Actor, Jeff Bridges", "Director, Joseph Kosinski", "Soundtrack Artist, M83"], 2);

var question3 = new Question("In The Godfather II, to which city does Don Corleone relocate his family?", ["Las Vegas", "Reno", "Atlantic City", "Lake Tahoe"], 3);

var question4 = new Question("In Lord of the Rings: Fellowship of the Ring, what birthday is Bilbo celebrating?", ["115th", "111th", "100th", "90th"], 1);

var question5 = new Question("In John Carter, to which planet in our solar system does the name 'Barsoom' refer?", ["Venus", "Earth", "Mars", "Jupiter"], 2);

console.log(question1.sayQuestion());
for (var i in question1) {
    console.log("1: " + question1[i]);
}
var questions = [question1, question2, question3, question4, question5];
for (var i = 0; i < questions.length; i++) {
    for(prop in questions[i]) {
        console.log(questions[i][prop]);
    }
}
// this should be an object or a method of an object
var showQuestion = function(number) {
    //empty the current question div.question
    $('.question').empty();
    //build the new question inside div.question
    $('.question').append('<h2>' + question1.ask + '</h2><div class="answerGroup"><div class="answer"><input type="radio" name="question1" id="mos-eisley" value="0"><label for="mos-eisley">' + question1.answers[0] + '</label></div>');
}

// var question1 = {
//     ask: "In Star Wars, A New Hope, in which spaceport was the cantina?",
//     answers: ["Mos Eisley", "Los Eisley", "Tattoine", "Anchorhead"],
//     correct: 0
// };
// var question2 = {
//     ask: "The movies Tron: Legacy (2010) and Oblivion (2013) have which person in common?",
//     answers: ["Actor, Tom Cruise", "Actor, Jeff Bridges", "Director, Joseph Kosinski", "Soundtrack Artist, M83"],
//     correct: 2
// }
// var question3 = {
//     ask: "In The Godfather II, to which city does Don Corleone relocate his family?",
//     answers: ["Las Vegas", "Reno", "Atlantic City", "Lake Tahoe"],
//     correct: 3
// }
// var question4 = {
//     ask: "In Lord of the Rings: Fellowship of the Ring, what birthday is Bilbo celebrating?",
//     answers: ["115th", "111th", "100th", "90th"],
//     correct: 1
// }
// var question5 = {
//     ask: "In John Carter, to which planet in our solar system does the name 'Barsoom' refer?",
//     answers: ["Venus", "Earth", "Mars", "Jupiter"],
//     correct: 2
// }
