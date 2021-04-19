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

  app.post("/games", (request, response) => {
    if (request.body.name && request.body.slug) {
      const bodyFromRequest = JSON.stringify(request.body);
      gameModel.postGame(bodyFromRequest);

      gameModel.findBySlug(request.body.slug).then((result) => response.status(201).json(result));
    } else {
      response.status(400).send("Error occured");
    }
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      response.json(games);
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        response.json(game);
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      response.status(200).json(platforms);
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      response.status(200).json(gamesForPlatform);
    });
  });

  return app;
}
