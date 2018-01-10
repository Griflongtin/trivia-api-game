export class APICall {
  constructor(number, category, difficulty, answersType) {
    this.questionNumbers = number;
    this.questionCategory = category;
    this.questionDifficulty = difficulty;
    this.answersType = answersType;
    this.url = `https://opentdb.com/api.php?amount=${this.questionNumbers}&category=${this.questionCategory}&difficulty=${this.questionDifficulty}&type=${this.answersType}`;
    this.array = [];

    // console.log(this.array);
  }


  callAPI(input, callback) {

    $.get(input,((data) => {
      console.log(data.results);
      callback(data.results);
        // console.log(data.results, "1");
        this.array.push(data.results[0]);
        // console.log(array, "3");
        // this.runCool(data);
      })
    );

  }
}
