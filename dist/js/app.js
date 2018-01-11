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
        // console.log(data.results);
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
var answers = [];
var questions = [];
var score = 0;
$(document).ready(function () {
  $(".form").submit(function (event) {
    event.preventDefault();
    var numberOfQuestion = $('#number-of-question').val();
    var category = $('#category').val();
    var difficulty = $('#difficulty').val();
    $('.score').append("Your Score: " + score);
    var user = new _trivia.APICall(numberOfQuestion, category, difficulty);
    $(".output-1").show();
    $(".form").hide();

    user.callAPI(user.url, function (data) {
      var gameBank = [];

      var _loop = function _loop(i) {
        answers.push(data[i].correct_answer);
        data[i].incorrect_answers.push(data[i].correct_answer);
        var thing = data[i].incorrect_answers;
        function myFunction1() {
          thing.sort();
        }
        myFunction1();
        gameBank.push([data[i].question, data[i].correct_answer, thing]);
        questions.push(thing);
      };

      for (var i = 0; i < data.length; i++) {
        _loop(i);
      }
      console.log(gameBank);
      console.log(gameBank[0][2][0]);

      for (var i = 0; i < gameBank.length; i++) {
        $('.question' + (i + 1)).append(gameBank[i][0]);
        $('.output-' + (i + 1) + ' .answer1').append(gameBank[i][2][0]);
        $('.output-' + (i + 1) + ' .answer2').append(gameBank[i][2][1]);
        $('.output-' + (i + 1) + ' .answer3').append(gameBank[i][2][2]);
        $('.output-' + (i + 1) + ' .answer4').append(gameBank[i][2][3]);
      }
    });
    console.log(answers);
    console.log(questions);
  });
  $("form.output-1").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question1\']:checked').val();
    console.log(questions[0][answer]);
    if (questions[0][answer] === answers[0]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-1").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
      $(".container").hide();
    } else {
      $(".output-2").show();
    }
  });
  $("form.output-2").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question2\']:checked').val();
    if (questions[1][answer] === answers[1]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-2").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-3").show();
    }
  });
  $("form.output-3").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question3\']:checked').val();
    if (questions[2][answer] === answers[2]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-3").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-4").show();
    }
  });
  $("form.output-4").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question4\']:checked').val();
    if (questions[3][answer] === answers[3]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-4").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-5").show();
    }
  });
  $("form.output-5").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question5\']:checked').val();
    if (questions[4][answer] === answers[4]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-5").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-6").show();
    }
  });
  $("form.output-6").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question6\']:checked').val();
    if (questions[5][answer] === answers[5]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-6").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-7").show();
    }
  });
  $("form.output-7").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question7\']:checked').val();
    if (questions[6][answer] === answers[6]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-7").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-8").show();
    }
  });
  $("form.output-8").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question8\']:checked').val();
    if (questions[7][answer] === answers[7]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-8").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-9").show();
    }
  });
  $("form.output-9").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question9\']:checked').val();
    if (questions[8][answer] === answers[8]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-9").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-10").show();
    }
  });
  $("form.output-10").submit(function (event) {
    event.preventDefault();
    var answer = $('input[type=\'radio\'][name=\'question10\']:checked').val();
    if (questions[9][answer] === answers[9]) {
      score++;
      $('.score').text("Your Score: " + score);
    }
    number++;
    $(".output-10").hide();
    $(".end-screen").show();
    $(".container").hide();
  });
});

},{"./../src/js/trivia.js":1}]},{},[2]);
