const degreeToRadian = require("../modules/closeOffices").degreeToRadian;
const calculateDistance = require("../modules/closeOffices").calculateDistance;
const arrangeMeal = require("../modules/closeOffices").arrangeMeal;
var assert = require("assert");

describe("Test cases for closeOffices.js", function () {
    it("Degree to radians test", function () {
        assert.strictEqual(degreeToRadian(undefined), undefined);
        assert.strictEqual(degreeToRadian(null), undefined);
        assert.strictEqual(degreeToRadian(0), 0);
        assert.strictEqual(degreeToRadian(1), 0.01745329);
        assert.strictEqual(degreeToRadian(7), 0.12217305);
        assert.strictEqual(degreeToRadian(45), 0.78539816);
        assert.strictEqual(degreeToRadian(90), 1.57079633);
        assert.strictEqual(degreeToRadian(135), 2.35619449);
        assert.strictEqual(degreeToRadian(180), 3.14159265);
        assert.strictEqual(degreeToRadian(225), 3.92699082);
        assert.strictEqual(degreeToRadian(270), 4.71238898);
        assert.strictEqual(degreeToRadian(315), 5.49778714);
        assert.strictEqual(degreeToRadian(360), 6.28318531);
        assert.strictEqual(degreeToRadian(-1), -0.01745329);
        assert.strictEqual(degreeToRadian(-45), -0.78539816);
        assert.strictEqual(degreeToRadian(-90), -1.57079633);
        assert.strictEqual(degreeToRadian(-135), -2.35619449);
        assert.strictEqual(degreeToRadian(-180), -3.14159265);
        assert.strictEqual(degreeToRadian(-360), -6.28318531);
        assert.strictEqual(degreeToRadian(-1.4565789), -0.0254221);
        assert.strictEqual(degreeToRadian(7.6548979), 0.13360317);
        assert.strictEqual(degreeToRadian(33.23211654), 0.58000985);
        assert.strictEqual(degreeToRadian(103.85199319999992), 1.81255922);
    });

    it("Great circle distance tests", function () {
        /* Please read README.md for details of this test cases. You can ignore them
            or enable and examine the results.
        */
        console.log(
            "Please read README.md for details of this test cases. " +
                "You can ignore them or enable and examine the results."
        );
        assert.strictEqual(calculateDistance(1.28304, 103.85199319999992), 10861.332);
        assert.strictEqual(calculateDistance(51.5014767, -0.0713608999999451), 5.084);
    });

    it("Finding the close offices test ascending order test", function () {
        let input = [
            {
                id: 13,
                urlName: "gallus-consulting",
                organization: "Gallus Consulting",
                customerLocations: "across the UK",
                willWorkRemotely: true,
                website: "http://www.gallusconsulting.com/",
                services:
                    "We're strategy consultants with a difference - we work with organisations and their leaders to take them from strategy to reality. In our work with leaders we often use 360-degree feedback to identify capability gaps, improve self-awareness, and develop strategic and cultural alignment. Our aim is for believe-able leaders to emerge with the drive, capability and cultural fit to take strategy to reality.",
                offices: [
                    {
                        location: "Northampton",
                        address:
                            "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
                        coordinates: "52.277409,-0.877935999999977",
                    },
                    {
                        location: "London",
                        address: "No1 Royal Exchange, London, EC3V 3DG",
                        coordinates: "51.5136102,-0.08757919999993646",
                    },
                    {
                        location: "Manchester",
                        address: "3 Hardman Square, Spinningfields, Manchester, M3 3EB",
                        coordinates: "53.47990859999999,-2.2510892999999896",
                    },
                ],
            },
            {
                id: 4,
                urlName: "blue-square-360",
                organization: "Blue Square 360",
                customerLocations: "globally",
                willWorkRemotely: true,
                website: "http://www.bluesquare360.com/",
                services:
                    "Blue Square 360 provides a professionally managed service covering all areas of a 360° Feedback initiative. We're experienced in supporting projects of all sizes, and always deliver a personal service that provides the level of support you need to ensure your 360 initiative delivers results for the business.",
                offices: [
                    {
                        location: "Singapore",
                        address:
                            "Ocean Financial Centre, Level 40, 10 Collyer Quay, Singapore, 049315",
                        coordinates: "1.28304,103.85199319999992",
                    },
                    {
                        location: "London, UK",
                        address: "St Saviours Wharf, London SE1 2BE",
                        coordinates: "51.5014767,-0.0713608999999451",
                    },
                ],
            },
        ];
        let expected = [
            {
                companyName: "Blue Square 360",
                address: "St Saviours Wharf, London SE1 2BE",
            },
            {
                companyName: "Gallus Consulting",
                address: "No1 Royal Exchange, London, EC3V 3DG",
            },
            {
                companyName: "Gallus Consulting",
                address:
                    "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
            },
        ];
        assert.deepStrictEqual(arrangeMeal(input), expected);
    });
});
