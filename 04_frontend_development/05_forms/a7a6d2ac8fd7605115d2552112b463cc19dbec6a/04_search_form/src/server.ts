import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import nunjucks from "nunjucks";

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

  app.get("/search", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      response.render("search");
    }
  });

  app.post("/search", formParser, (request, response) => {
    response.redirect(`/search/${request.body.searchKeyWord}`);
    // gameModel.findByKeyWord(request.body.searchKeyWord).then((games) => {
    //   if (clientWantsJson(request)) {
    //     response.json(games);
    //   } else {
    //     //response.status(200).render("search", { games });

    //   }
    // });
  });

  app.get("/search/:key_words", (request, response) => {
    console.log("key on search result page", request.params.key_words);
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      gameModel.findByKeyWord(request.params.key_words).then((foundGames) => {
        console.log(foundGames);
        response.render("searchResult", { foundGames });
      });
    }
  });

  return app;
}
