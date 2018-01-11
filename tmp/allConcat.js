import { APICall } from './../src/js/trivia.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let numberOfQuestion = $('#number-of-question').val();
    let category = $('#category').val();
    let difficulty = $('#difficulty').val();

    let user = new APICall(numberOfQuestion, category, difficulty);
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
       console.log(gameBank);
    });
  });
});
