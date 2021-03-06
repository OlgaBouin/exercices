import { app } from "../src/server";
import { Server } from "http";
import fetch from "node-fetch";
import games from "../src/games.json";

let server: Server;

beforeEach((done) => {
  server = app.listen(3030, done);
});

afterEach((done) => {
  server.close(done);
});

describe("/ endpoint", () => {
  it("Should respond with a 400 HTTP code", () => {
    expect.assertions(1);

    return fetch("http://localhost:3030/").then((response) => {
      expect(response.status).toBe(400);
    });
  });

  it("Should respond with a JSON error", () => {
    expect.assertions(1);

    return fetch("http://localhost:3030/")
      .then((response) => response.json())
      .then((result) => {
        expect(result).toEqual({ error: "Wrong resource" });
      });
  });
});
