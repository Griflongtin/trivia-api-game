(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APICall = exports.APICall = function () {
  function APICall(number, category, difficulty) {
    _classCallCheck(this, APICall);

    this.questionNumbers = number;
    this.questionCategory = category;
    this.questionDifficulty = difficulty;
    this.url = "https://opentdb.com/api.php?amount=" + this.questionNumbers + this.questionCategory + this.questionDifficulty + "&type=multiple";
  }

  _createClass(APICall, [{
    key: "callAPI",
    value: function callAPI(input, callback) {
      $.get(input, function (data) {
        console.log(data.results);
        callback(data.results);
      });
    }
  }]);

  return APICall;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _trivia = require('./../src/js/trivia.js');

var number = 1;
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var numberOfQuestion = $('#number-of-question').val();
    var category = $('#category').val();
    var difficulty = $('#difficulty').val();
    var score = 0;
    $('.score').append(score);
    console.log(numberOfQuestion, category, difficulty);
    var user = new _trivia.APICall(numberOfQuestion, category, difficulty);
    console.log(user.url);
    user.callAPI(user.url, function (data) {
      var gameBank = [];

      var _loop = function _loop(i) {
        data[i].incorrect_answers.push(data[i].correct_answer);
        var thing = data[i].incorrect_answers;
        function myFunction1() {
          thing.sort();
        }
        myFunction1();
        gameBank.push([data[i].question, data[i].correct_answer, thing]);
      };

      for (var i = 0; i < data.length; i++) {
        _loop(i);
      };
      for (var i = 0; i < gameBank.length; i++) {
        $('.questionArea').append('<form class="output output-' + (i + 1) + '">\n             <h1 class="question">' + gameBank[i][0] + '</h1>\n             <div class="form-check">\n               <input class="form-check-input" type="radio" name="answer' + i + '" id="answer1" value="' + gameBank[i][2][0] + '" checked>\n               <label class="form-check-label" for="answer1" class="answer1">\n               ' + gameBank[i][2][0] + '\n               </label>\n             </div>\n             <div class="form-check">\n               <input class="form-check-input" type="radio" name="answer' + i + '" id="answer2" value=" ' + gameBank[i][2][1] + '">\n               <label class="form-check-label" for="answer2" class="answer2">\n               ' + gameBank[i][2][1] + '\n               </label>\n             </div>\n             <div class="form-check">\n               <input class="form-check-input" type="radio" name="answer' + i + '" id="answer3" value="' + gameBank[i][2][2] + '">\n               <label class="form-check-label" for="answer3" class="answer3">\n               ' + gameBank[i][2][2] + '\n               </label>\n             </div>\n             <div class="form-check">\n               <input class="form-check-input" type="radio" name="answer' + i + '" id="answer4" value="' + gameBank[i][2][3] + '">\n               <label class="form-check-label" for="answer4" class="answer4">\n               ' + gameBank[i][2][3] + '\n               </label>\n             </div>\n             <button class="btn btn-info btn' + (i + 1) + '"type="submit" name="button">Submit Answer</button>\n           </form>');
      };
      var run = function run(input) {
        $('.btn' + input).submit(function (event) {
          event.preventDefault();
          var answer = $('input[type=\'radio\'][name=\'answer' + (input - 1) + '\']:checked').val();
          if (answer === gameBank[input - 1][1]) {
            return score++;
          };
          $('.score').append(score);
          //  $(`output-${input}`).hide();
          //  $(`output-${input + 1}`).show();
          number++;
        });
        //  console.log(gameBank);
        //  console.log(gameBank[0][2][1]);
      };
      run(number);
      $('.output-1').show();
    });
  });
});

},{"./../src/js/trivia.js":1}]},{},[2]);
