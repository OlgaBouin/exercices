# Add to your API

/ endpoint
✕ Should respond with a 400 HTTP code (12 ms)
✕ Should respond with a JSON error (3 ms)
/games endpoint
✕ Should respond with a 200 HTTP code (1 ms)
✕ Should return an array of games (2 ms)
/games/:game_slug endpoint
✕ Should respond with a 200 HTTP code when the game exist (1 ms)
✕ Should respond with a 404 HTTP code when the game exist (1 ms)
✕ Should return a game object (2 ms)
/platforms/:platform_slug endpoint
✕ Should respond with a 200 HTTP code (1 ms)
✕ Should always respond with an array (2 ms)
✕ Should return games corresponding to the platform (1 ms)
/platforms endpoint
✕ Should respond with a 200 HTTP code (1 ms)
✕ Should return an array of platforms (1 ms)
✕ Should have no duplicates (1 ms)
/games POST endpoint
✕ Should respond with a 201 HTTP code with good data (1 ms)
✕ Should respond with a 400 HTTP code if a property is missing (2 ms)
✕ Should respond with the game just added (1 ms)
✕ Should work to find the added game with its slug (1 ms)

## CONTEXT AND OBJECTIVES

It's time to enhance your API from your data.

Add a POST endpoint on `/games` that will add a game to your database.

## SPECS

Your endpoint should validate your data and return a 400 Error if the game you try to add has no `name` or no `slug`.

Otherwise, it should add the data to the database and return a status code of 201.

It should also return the newly added game.

For instance:

```shell-session
$ curl -d '{"name": "A new game", "slug": "a-new-game"}' -H 'Content-Type: application/json' http://localhost:3000/games
{"_id":"6076120963740a7ff491f4e7","name":"A new game","slug":"a-new-game"}%
```

You should add a `create` method on your Model to create the game.

Hint: you can type this methods with `Promise<unknown>`

Hint: once you've created your game, you can use `gameModel.findBySlug` to return it back.
