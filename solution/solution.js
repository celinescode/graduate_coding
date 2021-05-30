//import * as data from "../data/members-sample.json";
import * as data from "../data/members.json";
import pkg from "csv-writer";

const { createArrayCsvWriter } = pkg;
const csvWriter = createArrayCsvWriter({
  //uncomment the next line to display headers in the csv
  //header: ["state", "total"],
  path: "solution/out/data.csv",
});

export const sumByState = (data) => {
  var counter = {
    //I choose to use object rather than other format so it would be easier to increment and make the code cleaner
    ACT: 0,
    NSW: 0,
    NT: 0,
    QLD: 0,
    SA: 0,
    TAS: 0,
    VIC: 0,
    WA: 0,
  };

  data.forEach((customer) => {
    //I was originally thinking about using array.map and write state into a new array and then count. but it will loop throug the whole array 8 times more, So I decide to increment straight away  
    if (customer.active) {
      const currentState = customer.address.split(", ")[1]; //using this to avoid switch cases to make the code clean, split() is the easiest way that I can think of to extract the State
      counter[currentState] += 1;
    }
  });
  return counter;
};

const counter = sumByState(data.default);
const result = Object.entries(counter); // reformat the counter so it can be used in csv-writer

csvWriter //copied from the csv-writer documentation, used the existing library so don't need to reinvent the wheel :)
  .writeRecords(result) // returns a promise
  .then(() => {
    console.log("restult has been written into CSV file: data.csv");
  });


