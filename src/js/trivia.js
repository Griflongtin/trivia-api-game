export class APICall {
  constructor(number, category, difficulty, answersType) {
    this.questionNumbers = number;
    this.questionCategory = category;
    this.questionDifficulty = difficulty;
    this.answersType = answersType;
    this.url = '';
  }
  callAPI() {
    $.get(
      "https://opentdb.com/api.php?amount=10",
      function(data) {
        console.log(data.results);
      }
    );
    return data;
  }
}
