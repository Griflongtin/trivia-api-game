import { APICall } from './../src/js/trivia.js';
let number = 1;
let answers = [];
let questions = [];
let score = 0;
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    let numberOfQuestion = $('#number-of-question').val();
    let category = $('#category').val();
    let difficulty = $('#difficulty').val();
    $('.score').append(score);
    console.log(numberOfQuestion, category, difficulty);
    let user = new APICall(numberOfQuestion, category, difficulty);
    console.log(user.url);
    $(".output-1").show();
    user.callAPI(user.url, function(data) {
      let gameBank= [];
      for(let i = 0; i < data.length; i++){
        answers.push(data[i].correct_answer);
        data[i].incorrect_answers.push(data[i].correct_answer);
        let thing = data[i].incorrect_answers;
        function myFunction1() {
          thing.sort();
        }
        myFunction1();
        gameBank.push([data[i].question, data[i].correct_answer, thing]);
        questions.push(thing);
        }
        console.log(gameBank);
        console.log(gameBank[0][2][0]);

        for(let i = 0; i < gameBank.length; i++){
            $(`.question${i+1}`).append(gameBank[i][0]);
            $(`.output-${i+1} .answer1`).append(gameBank[i][2][0]);
            $(`.output-${i+1} .answer2`).append(gameBank[i][2][1]);
            $(`.output-${i+1} .answer3`).append(gameBank[i][2][2]);
            $(`.output-${i+1} .answer4`).append(gameBank[i][2][3]);
        }
    });
    console.log(answers);
    console.log(questions);

  });
  $("form.output-1").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question1']:checked`).val();
    console.log(questions[0][answer]);
      if (questions[0][answer] === answers[0]){
        score++;
        $('.score').text(score);
      }
      number++;
    $(".output-1").hide();
    if (number === answers.length +1) {
      $(".end-screen").show();
    } else {
      $(".output-2").show();
    }
  });
  $(".output-2").submit(function(event) {
    event.preventDefault();
    // let answer = $(`input[type='radio'][name='answer2']:checked`).val();
    //   if (answer === answers[0]){
    //     score++;
    //   }
    //   number++;
    // $(".output-2").hide();
    // if (number === answers.length) {
    //   $(".end-screen").show();
    // } else {
      // $(".output-3").show();
    // }
  });
});
