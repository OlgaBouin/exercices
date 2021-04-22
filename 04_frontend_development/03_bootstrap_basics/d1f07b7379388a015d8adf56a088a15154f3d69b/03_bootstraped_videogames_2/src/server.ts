import express, { request, response } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import * as gamesController from "./controllers/games.controller";
import * as platformsController from "./controllers/platforms.controller";
import * as nunjucks from "nunjucks";

export function clientWantsJson(request: express.Request): boolean {
  return request.get("accept") === "application/json" || request.get("Accept") === "application/json";
}

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();
  app.use("/assets", express.static("assets"));

  nunjucks.configure("views", { autoescape: true, express: app });

  app.set("view engine", "njk");

  app.get("/", (request, response) => response.render("home"));

  app.get("/games", gamesController.indexGames(gameModel));

  app.get("/games/:game_slug", gamesController.indexOneGame(gameModel));

  app.get("/platforms", platformsController.index(gameModel));

  app.get("/platforms/:platform_slug", platformsController.indexOnePlatform(gameModel));

  app.get("/*", (request, response) => {
    if (clientWantsJson(request)) response.status(400).json({ error: "Wrong resource" });
    else response.status(400).render("not-found");
  });

  return app;
}
