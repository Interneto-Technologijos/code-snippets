const { it } = require("@jest/globals");
const request = require("supertest");

it("Should return 200", () =>
  request("http://timbernerslee.eyo.lt")
    .post("/tcp.txt")
    .set("Host", "timbernerslee.eyo.lt")
    .set("Content-Type", "text/plain")
    .set("Content-Length", "12")
    .set("My-Name", "MykolasMolis")
    .send("Multiplexing")
    .expect(200)
    .end((err, res) => console.log(err, res)));
