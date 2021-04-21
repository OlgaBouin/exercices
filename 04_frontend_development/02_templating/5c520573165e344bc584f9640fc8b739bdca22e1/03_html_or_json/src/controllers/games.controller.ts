import * as express from "express";

import { GameModel } from "../models/game";
import { clientWantsJson } from "../server";

export function indexGames(gameM: GameModel) {
  return async (request: express.Request, response: express.Response) => {
    const gamesArray = await gameM.getAll();
    if (gamesArray) {
      if (clientWantsJson(request)) response.json(gamesArray);
      else response.render("gamesView", { gamesArray });
    } else if (clientWantsJson(request)) response.status(404).end();
    else response.status(404).render("not-found");
  };
}

export function indexOneGame(gameMod: GameModel) {
  return async (request: express.Request, response: express.Response) => {
    const oneGame = await gameMod.findBySlug(request.params.game_slug);
    if (oneGame) {
      if (clientWantsJson(request)) response.json(oneGame);
      else response.render("oneGameView", { oneGame });
    } else if (clientWantsJson(request)) response.status(404).end();
    else response.status(404).render("not-found");
  };
}
