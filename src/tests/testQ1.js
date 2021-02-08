const deepClone = require("../modules/deepClone").deepClone;
var assert = require("assert");

describe("Test cases for question 1", function () {
    it("Testing the deepClone function", function () {
        const input = {
            property1: 1,
            property2: "Hello",
            property3: false,
            property4: 3,
            property5: {
                property51: "inside",
                property52: "property",
            },
            property6: [11, 12, 13],
            property7: "World",
        };
        assert.notDeepStrictEqual(deepClone(input), input);
    });
});
