import * as express from "express";

import { GameModel } from "../models/game";
import { clientWantsJson } from "../server";

export function index(gameM: GameModel) {
  return async (request: express.Request, response: express.Response) => {
    const platforms = await gameM.getPlatforms();

    if (platforms) {
      if (clientWantsJson(request)) response.json(platforms);
      else response.render("platformView", { platforms });
    } else if (clientWantsJson(request)) response.status(404).end();
    else response.status(404).render("not-found");
  };
}

export function indexOnePlatform(gameM: GameModel) {
  return async (request: express.Request, response: express.Response) => {
    const onePlatform = await gameM.getPlatformBySlug(request.params.platform_slug);
    const gamesOfPlatform = await gameM.findByPlatform(request.params.platform_slug);
    if (onePlatform && gamesOfPlatform) {
      if (clientWantsJson(request)) response.json(onePlatform);
      else response.render("onePlatformView", { data: { gamesOfPlatform, onePlatform } });
    } else if (clientWantsJson(request)) response.status(404).end();
    else response.status(404).render("not-found");
  };
}
