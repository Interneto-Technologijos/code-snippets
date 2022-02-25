const { it } = require("@jest/globals");
const request = require("supertest");

it("Should return 200", () =>
  request("http://timbernerslee.eyo.lt")
    .put("/scripts/generator.js?engine=v8")
    // .set("Host", "timbernerslee.eyo.lt")
    .set("Content-Type", "application/javascript")
    // .set("Content-Length", "81")
    .set("My-Name", "Mykolas Molis")
    .send(
      'const protocol = "ip";\nconsole.log(`protocol used to enable http: ${protocol}`);\n'
    )
    .expect(200));
