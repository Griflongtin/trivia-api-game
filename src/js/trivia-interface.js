import { APICall } from './../src/js/trivia.js';

$(document).ready(function() {
  let user = new APICall(10, 15, 'hard', 'multiple');
  user.callAPI(user.url, function(data) {
    let gameBank = [];
     for(let i = 0; i < data.length; i++){
       data[i].incorrect_answers.push(data[i].correct_answer);
       gameBank.push([data[i].question, data[i].correct_answer, data[i].incorrect_answers])
       console.log(gameBank);
     };
  });
});
