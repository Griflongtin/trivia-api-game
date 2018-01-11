export class APICall {
  constructor(number, category, difficulty) {
    this.questionNumbers = number;
    this.questionCategory = category;
    this.questionDifficulty = difficulty;
    this.url = `https://opentdb.com/api.php?amount=${this.questionNumbers}${this.questionCategory}${this.questionDifficulty}&type=multiple`;
  }

  callAPI(input, callback) {
    $.get(input,((data) => {
      console.log(data.results);
      callback(data.results);
      })
    );
  }
}
