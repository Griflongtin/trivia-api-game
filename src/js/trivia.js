export class APICall {
  constructor(number, category, difficulty, answersType) {
    this.questionNumbers = number;
    this.questionCategory = category;
    this.questionDifficulty = difficulty;
    this.answersType = answersType;
    this.url = 'https://opentdb.com/api.php?amount=10';
  }
  callAPI(input) {
    let thing = $.get(
      input,function(data) {
        console.log(data.results);
        return data;
      }
    );
    return thing
  }
}
