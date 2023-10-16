import { test, expect } from "vitest";
import supertest from "supertest";
import app from "../../../index.js";

test("create user and receive 201 status code", async () => {
  const userInput = {
    firstName: "test",
    lastName: "tester",
    email: "test@test.com",
  };

  const { statusCode, body } = await supertest(app)
    .post("/users")
    .send(userInput);

  expect(body.firstName).toBe(userInput.firstName);
  expect(statusCode).toBe(201);
});

test("get user and receive 200 status code", async () => {
  const { statusCode, body } = await supertest(app).get("/users/2");

  expect(body.firstName).toBe("Jesse");
  expect(statusCode).toBe(200);
});

test("update user and receive 200 status code", async () => {
  const userInput = {
    firstName: "Sharj",
  };

  const { statusCode, body } = await supertest(app)
    .put("/users/1")
    .send(userInput);

  expect(body.firstName).toBe(userInput.firstName);
  expect(statusCode).toBe(200);
});

test("delete user and receive 200 status code", async () => {
  const { statusCode, body } = await supertest(app).delete(
    "/admin/users/test@test.com",
  );

  expect(body).toContain({ email: "test@test.com" });
  expect(statusCode).toBe(200);
});
