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
    $('.score').append(score);
    console.log(numberOfQuestion, category, difficulty);
    var user = new _trivia.APICall(numberOfQuestion, category, difficulty);
    console.log(user.url);
    $(".output-1").show();
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
      $('.score').text(score);
    }
    number++;
    $(".output-1").hide();
    if (number === answers.length + 1) {
      $(".end-screen").show();
    } else {
      $(".output-2").show();
    }
  });
  $(".output-2").submit(function (event) {
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

},{"./../src/js/trivia.js":1}]},{},[2]);
