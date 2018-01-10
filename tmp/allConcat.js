import { APICall } from './../src/js/trivia.js';

$(document).ready(function() {
  let user = new APICall();

  const data = user.callAPI();
  console.log(data);
});
