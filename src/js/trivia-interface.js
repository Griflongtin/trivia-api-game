import { APICall } from './../src/js/trivia.js';
let number = 1
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let numberOfQuestion = $('#number-of-question').val();
    let category = $('#category').val();
    let difficulty = $('#difficulty').val();
    let score = 0;
    $('.score').append(score);
    console.log(numberOfQuestion, category, difficulty);
    let user = new APICall(numberOfQuestion, category, difficulty);
    console.log(user.url);
    user.callAPI(user.url, function(data) {
      let gameBank = [];
       for(let i = 0; i < data.length; i++){
         data[i].incorrect_answers.push(data[i].correct_answer);
         let thing = data[i].incorrect_answers;
         function myFunction1() {
          thing.sort();
          }
          myFunction1();
         gameBank.push([data[i].question, data[i].correct_answer, thing])
       };
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
             <button class="btn btn-info btn${i+1}"type="submit" name="button">Submit Answer</button>
           </form>`
         );
       };
     let run = function(input) {
       $(`.btn${input}`).submit(function(event) {
         event.preventDefault();
         let answer = $(`input[type='radio'][name='answer${input - 1}']:checked`).val();
         if (answer === gameBank[input-1][1]){
           return score++;
         };
         $('.score').append(score);
        //  $(`output-${input}`).hide();
        //  $(`output-${input + 1}`).show();
        number++;
       });
      //  console.log(gameBank);
      //  console.log(gameBank[0][2][1]);
     }
       run(number);
       $('.output-1').show();
    });
  });
});
