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
    $('.score').append("Your Score: " + score);
    let user = new APICall(numberOfQuestion, category, difficulty);
    $(".output-1").show();
    $(".form").hide();

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
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-1").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-2").show();
    }
  });
  $("form.output-2").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question2']:checked`).val();
      if (questions[1][answer] === answers[1]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-2").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-3").show();
    }
  });
  $("form.output-3").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question3']:checked`).val();
      if (questions[2][answer] === answers[2]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-3").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-4").show();
    }
  });
  $("form.output-4").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question4']:checked`).val();
      if (questions[3][answer] === answers[3]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-4").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-5").show();
    }
  });
  $("form.output-5").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question5']:checked`).val();
      if (questions[4][answer] === answers[4]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-5").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-6").show();
    }
  });
  $("form.output-6").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question6']:checked`).val();
      if (questions[5][answer] === answers[5]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-6").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-7").show();
    }
  });
  $("form.output-7").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question7']:checked`).val();
      if (questions[6][answer] === answers[6]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-7").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-8").show();
    }
  });
  $("form.output-8").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question8']:checked`).val();
      if (questions[7][answer] === answers[7]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-8").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-9").show();
    }
  });
  $("form.output-9").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question9']:checked`).val();
      if (questions[8][answer] === answers[8]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-9").hide();
    if (number === (answers.length + 1) ) {
      $(".end-screen").show();
    } else {
      $(".output-10").show();
    }
  });
  $("form.output-10").submit(function(event) {
    event.preventDefault();
    let answer = $(`input[type='radio'][name='question10']:checked`).val();
      if (questions[9][answer] === answers[9]){
        score++;
        $('.score').text("Your Score: " + score);
      }
      number++;
    $(".output-10").hide();
    $(".end-screen").show();

  });

});
