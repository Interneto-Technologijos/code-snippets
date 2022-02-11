const { it } = require("@jest/globals");
const request = require("supertest");

it("Should return 200", () =>
  request("http://timbernerslee.eyo.lt")
    .get("/1989/MykolasMolis.html")
    .expect(200));
// .end((err, res) => {
//   //console.log(err, res);
