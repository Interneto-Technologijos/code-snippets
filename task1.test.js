const { it } = require("@jest/globals");
const request = require("supertest");

it("Should return 200", () =>
  request("http://timbernerslee.eyo.lt")
    .put("/scripts/generator.js?engine=v8")
    .expect(200));
// .end((err, res) => {
//   //console.log(err, res);
