import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import { Comment } from "./models/game";
import nunjucks from "nunjucks";
import { ReadPreference } from "mongodb";

const clientWantsJson = (request: express.Request): boolean => request.get("accept") === "application/json";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  nunjucks.configure("src/views", {
    autoescape: true,
    express: app,
  });

  app.set("view engine", "njk");

  app.get("/", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      response.render("home");
    }
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if (clientWantsJson(request)) {
        response.json(games);
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        if (clientWantsJson(request)) {
          response.json(game);
        } else {
          response.render("game", { game });
        }
      }
    });
  });
  const formParser = express.urlencoded({ extended: true });

  app.post("/games/:game_slug", formParser, (request, response) => {
    console.log(request.body);
    console.log(request.body.name);
    console.log(request.body.comment);

    const newComment: Comment = { name: request.body.name, comment: request.body.comment };
    gameModel
      .addComment(request.params.game_slug, newComment)
      .then((resGame) => response.status(201).redirect(`/games/${resGame.slug}`));
  });

  return app;
}
