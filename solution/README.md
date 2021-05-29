# Celine's solution

## Project setup
1. go to GRADUATE_CODING folder
2. open terminal and run `npm install` to install the dependencies
3. in the terminal run `npm start` to run the code


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



## Thoughts on the problem
I think this problem is interesting to play with. And it is very easy for the output part when I can use an npm library. 

There are still some research need to be done for me when choosing wwhich library to use, and the csv-writer is what I found the easiest so far.

### Task break down
1. import the data file
2. extract the state from each customer object
3. sum up customers by state
4. find a node module to write result to csv file
5. test & refator


## References
[how to import a JSON file in ECMAScript 6](https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6)

[csv-writer](https://www.npmjs.com/package/csv-writer)

[converting object to array](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)

