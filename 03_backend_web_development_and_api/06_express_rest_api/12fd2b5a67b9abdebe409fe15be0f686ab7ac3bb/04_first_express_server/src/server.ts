import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("OK");
});

export { app };
//désoléé j'avais déjà vu la reponse