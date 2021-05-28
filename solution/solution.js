//import * as data from "../data/members-sample.json";
import * as data from '../data/members.json'
import pkg from "csv-writer";

const { createArrayCsvWriter } = pkg;
const csvWriter = createArrayCsvWriter({
  //header: ["state", "total"],
  path: "solution/out/data.csv",
});

var counter = {
  ACT: 0,
  NSW: 0,
  NT: 0,
  QLD: 0,
  SA: 0,
  TAS: 0,
  VIC: 0,
  WA: 0,
};

data.default.forEach((e) => {
  const currentState = e.address.split(", ")[1];
  counter[currentState] += 1; //?
});

const result = Object.entries(counter);

csvWriter
  .writeRecords(result) // returns a promise
  .then(() => {
    console.log("...Done");
  });
