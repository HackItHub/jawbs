import { test, expect } from "vitest";
import supertest from "supertest";
import app from "../../../index.js";

test("create user and receive 201 status code", async () => {
  const userInput = {
    firstName: "jesse",
    lastName: "navarro",
  };

  const { statusCode, body } = await supertest(app)
    .post("/users")
    .send(userInput);

  expect(body.firstName).toBe(userInput.firstName);
  expect(statusCode).toBe(201);
});

test("get user and receive 200 status code", async () => {
  const { statusCode, body } = await supertest(app).get("/users/5");

  expect(body.firstName).toBe("jesso");
  expect(statusCode).toBe(200);
});

test("update user and receive 200 status code", async () => {
  const userInput = {
    firstName: "jesso",
    lastName: "navarro",
  };

  const { statusCode, body } = await supertest(app)
    .put("/users/5")
    .send(userInput);

  expect(body.firstName).toBe(userInput.firstName);
  expect(statusCode).toBe(200);
});
