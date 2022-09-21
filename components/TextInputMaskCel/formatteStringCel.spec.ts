import formatteStringCel from "./formatteStringCel";

describe("formatteStringCel", () => {
    test("paste whole number, should return a celphone number formatted", () => {
        expect(formatteStringCel("99876543211","")).toStrictEqual(
            {"valueFormatted": "(99)87654-3211", "valueJustNumber": "99876543211"}
        );
    })
})