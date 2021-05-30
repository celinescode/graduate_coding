# Celine's solution

## Project setup
1. go to GRADUATE_CODING folder
2. open terminal and run `npm install` to install the dependencies
3. in the terminal run `npm start` to run the code

---
## Output 
After finishing the 3 steps that mentioned about, the output csv file will be generated in the `GRADUATE_CODING/solution/out` folder with file named `data.csv`

Here is the sample look of the output

State|Total
--- | --- 
ACT | 967
NSW | 893
NT | 986
QLD | 922
SA | 900
TAS | 987
VIC | 965
WA | 930


---
## Thoughts on the problem
I think this problem is interesting to play with. And it is very easy for the output part when I can use an npm library. 

There are still some research need to be done for me when choosing wwhich library to use, and the csv-writer is what I found the easiest so far.

When looking at the member object, there is a flag indicating whether the member is active or not. Even it hasn't been mentioned in the requirement, I think it still worth to double check if they want to only count the active customer to make sure I deliver the correct result. Communication is very important in software development cause customer can forget to put everything in the requirement and they may not even know what they actually want.

I have also learnt how to use Markdown for this task, which is quiet interesting and easy to use. I like this job cause there is always new things that I can learn and expeirement. 

---
### Task break down
1. import the data file
2. extract the state from each customer object
3. sum up customers by state
4. find a node module to write result to csv file
5. test & refator

### Unit Testing
I haven't done any unit testing before, so I didn't some research in jest, and partialy implemented a test case in another branch called `testing`.
Since this is not required and I'm running out of time for my other things, I will come back to play with it when I got time.
Things that need to be fixed here:
1. Run test on private function. Export function just for testing is not good practice.
2. Stop the test when function ended. This can be fixed now by move that function into a seperate file, but I feel this is unnecessary and doesn't really make sense.

If you want to see the test:
1. checkout to `testing` branch
2. in terminal run `npm install` to install jest
3. in terminal run `npm test` to run the test

---
## References
[how to import a JSON file in ECMAScript 6](https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6)

[csv-writer](https://www.npmjs.com/package/csv-writer)

[converting object to array](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)

