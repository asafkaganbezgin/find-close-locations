/**
 * Takes the degree and converts it in to radians.
 * @param {number} degree
 * @returns {number} in radians
 */
function degreeToRadian(degree) {
    if (degree === undefined || degree === null) {
        console.log("Please enter a valid number");
        return;
    } else if (degree === 0) {
        return 0;
    } else return parseFloat(((degree * Math.PI) / 180).toFixed(8));
}

/**
 * Calculate the great circle distance between two points on a sphere.
 * @param {number} longitude in radians.
 * @param {number} latitude in radians.
 * @returns {number} distance in kilometers.
 */
function calculateDistance(latitude, longitude) {
    // Necessary variables
    let lambdaLon;
    let betweenBraces;
    let centralAngle;
    let distance;
    const londonLat = 0.89911368; // radians
    const londonLon = -0.00246264; // radians
    const earthRadius = 6371; // km

    // Convert the input coordinates in to radians
    radianLat = degreeToRadian(latitude);
    radianLon = degreeToRadian(longitude);

    // Apply the great-circle distance formula
    lambdaLon = Math.cos(Math.abs(londonLon - radianLon));
    betweenBraces =
        Math.sin(londonLat) * Math.sin(radianLat) +
        Math.cos(londonLat) * Math.cos(radianLat) * lambdaLon;
    centralAngle = Math.acos(betweenBraces);
    distance = earthRadius * centralAngle;

    return distance;
}

/**
 * Reads list of partners and outputs the company names
 * and addresses of matching partners (with offices within 100km)
 * sorted by company name (ascending).
 * @param {Object} partners
 * @return {Object}
 */
function arrangeMeal(partners) {
    // Variables
    let result = [];
    let temp = {};
    let lat;
    let lon;

    /* Find offices which are closer than 100km and push them into results array as object.
        The pushed objects have the properties companyName & address. 
    */
    partners.forEach((element) => {
        for (let i = 0; i < element["offices"].length; i++) {
            lat = parseFloat(element["offices"][i]["coordinates"].split(",")[0]);
            lon = parseFloat(element["offices"][i]["coordinates"].split(",")[1]);

            if (calculateDistance(lat, lon) <= 100) {
                Object.defineProperty(temp, "companyName", {
                    value: element["organization"],
                    configurable: true,
                    enumerable: true,
                });
                Object.defineProperty(temp, "address", {
                    value: element["offices"][i]["address"],
                    configurable: true,
                    enumerable: true,
                });
                result.push(temp);
                temp = {};
            }
        }
    });

    // Arrange results in ascending(companyName) order.
    result.sort((a, b) => (a.companyName > b.companyName ? 1 : -1));

    return result;
}

module.exports = {
    degreeToRadian,
    calculateDistance,
    arrangeMeal,
};
