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
        }
        console.log(gameBank[0][0]);

        for(let i = 0; i < gameBank.length; i++){
            $(`.question${i}`).append(gameBank[i][0]);
            $(`.output-${i}.answer1`).append(gameBank[i][3][0]);
            $(`.output-${i}.answer2`).append(gameBank[i][3][1]);
            $(`.output-${i}.answer3`).append(gameBank[i][3][2]);
            $(`.output-${i}.answer4`).append(gameBank[i][3][3]);
        }
    });

  });
  $("form.output-1").submit(function(event) {
    event.preventDefault();
    // let answer = $(`input[type='radio'][name='answer1']:checked`).val();
    //   if (answer === answers[0]){
    //     score++;
    //   }
    //   number++;
    $(".output-1").hide();
    // if (number === answers.length) {
    //   $(".end-screen").show();
    // } else {
      $(".output-2").show();
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
