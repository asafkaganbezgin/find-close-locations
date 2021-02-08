/**
 * Takes an object and creates a deep copy of it.
 * @param {Object} obj
 * @returns {Object}
 */
function deepClone(obj) {
    // If the input is not a valid object, return from the function.
    if (typeof obj !== "object" || obj === null || obj === undefined) {
        return obj;
    }

    // Necessary variables
    let result = {};
    let value;

    for (const key in obj) {
        value = obj[key];
        result[key] = deepClone(value);
    }

    return result;
}

module.exports = {
    deepClone,
};
