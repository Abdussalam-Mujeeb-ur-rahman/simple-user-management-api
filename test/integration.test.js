
const { string } = require("joi");
const supertest = require("supertest")
const server = require("../server")

jest.setTimeout(30000);

describe("routes", () => {
    it("get the home page", async () => {
        const response = await supertest(server).get("/");
        expect(response.status).toBe(200)
        console.log(response.body)
    });
})