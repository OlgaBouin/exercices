import express from "express";
import bodyParser from "body-parser";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.get("/", (request, response) => {
    response.status(400).json({ error: "Wrong resource" });
  });

  app.use(bodyParser.json());

  app.post("/games", async (request, response) => {
    if (request.body.name && request.body.slug) {
      const bodyFromRequest = JSON.stringify(request.body);
      gameModel.postGame(bodyFromRequest);
      const gameFoundBySlug = await gameModel.findBySlug(request.body.slug);
      response.status(201).json(gameFoundBySlug);
    } else {
      response.status(400).send("Error occured");
    }
  });

  app.get("/games", async (request, response) => {
    response.json(await gameModel.getAll());
  });

  app.get("/games/:game_slug", async (request, response) => {
    const game = await gameModel.findBySlug(request.params.game_slug);
    if (!game) {
      response.status(404).end();
    } else {
      response.json(game);
    }
  });

  app.get("/platforms", async (request, response) => {
    response.status(200).json(await gameModel.getPlatforms());
  });

  app.get("/platforms/:platform_slug", async (request, response) => {
    response.status(200).json(await gameModel.findByPlatform(request.params.platform_slug));
  });

  return app;
}
