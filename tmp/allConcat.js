import { APICall } from './../src/js/trivia.js';
let number = 1;
let answers = [];
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
    let gameBank= [];
    user.callAPI(user.url, function(data) {
      for(let i = 0; i < data.length; i++){
        answers.push(data[i].correct_answer);
        data[i].incorrect_answers.push(data[i].correct_answer);
        let thing = data[i].incorrect_answers;
        function myFunction1() {
          thing.sort();
        }
        myFunction1();
        gameBank.push([data[i].question, data[i].correct_answer, thing]);
      }
      let appendFunction = function(gameBank) {
        for(let i =0; i < gameBank.length; i++){
          $('.questionArea').append(
            `<form class="output output-${i + 1}">
            <h1 class="question">${gameBank[i][0]}</h1>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="answer${i}" id="answer1" value="${gameBank[i][2][0]}" checked>
            <label class="form-check-label" for="answer1" class="answer1">
            ${gameBank[i][2][0]}
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="answer${i}" id="answer2" value=" ${gameBank[i][2][1]}">
            <label class="form-check-label" for="answer2" class="answer2">
            ${gameBank[i][2][1]}
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="answer${i}" id="answer3" value="${gameBank[i][2][2]}">
            <label class="form-check-label" for="answer3" class="answer3">
            ${gameBank[i][2][2]}
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="answer${i}" id="answer4" value="${gameBank[i][2][3]}">
            <label class="form-check-label" for="answer4" class="answer4">
            ${gameBank[i][2][3]}
            </label>
            </div>
            <button class="btn btn-info output-${i+1}"type="submit">Submit Answer</button>
            </form>`
          );
          $(".output-1").show();
        }
      }
      appendFunction(gameBank);
    });
  });
  $(".question").click(function() {
    alert('hello');
  })
  $("form.output-1").submit(function(event) {
    alert("hi");
    event.preventDefault();
    // let answer = $(`input[type='radio'][name='answer1']:checked`).val();
    //   if (answer === answers[0]){
    //     score++;
    //   }
      // number++;
    // $(".output-1").hide();
    // if (number === answers.length) {
    //   $(".end-screen").show();
    // } else {
      // $(".output-2").show();
    // }
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
