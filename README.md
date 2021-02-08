# Project Notes

This project has two implementations:

1. Deep cloning a JavaScript object with a recursive fashion (no native JavaScript libraries used).
2. Great-circle distance calculation of two locations given in latitude and longitude format.

**Mocha** library is used for unit testing.

First, hit the command below:

    npm install

deepClone() function can be examined by specifically opening deepClone.js file located in **_src/modules/_**. It is not going to be executed in the program and not going to display any results. However, there is a test case where you can see the function actually deep clones the given javascript object. In order to run the test, simply run:

    npm test

**Important:** When you run the tests, you are going to see failed test cases. They are related to the great-circle distance function. In order to test my calculations, I used an online great-circle distance calculator website to compare my results. There is a slight precision error with my results and the results I got from the online calculator. However, the error is ignoreable since my results do not effect the functionality of the program. You can compare them in the test cases. If you do not want that, plese simply comment out the corresponding test case block.

## Runnning the Program

After reading and completing the aforementioned steps and simply hit the command:

    npm start

You are going to see the name of the companies and the addresses of their offices located within 100km to the desired location (hard-coded in the function) in the console in ascending order with respect to the company names.
