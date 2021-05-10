 <!-- FAIL  tests/db-utils.test.ts (38.215 s)
  DB utils
    #initDatabase
      ✕ Should return a promise of a mongo client (20251 ms)
      ✓ Should handle errors (370 ms)
    #createCollectionWithValidator
      ✕ Should create a collection including a validator (329 ms)
      ✕ Should return a promise of a mongo collection (412 ms)
      ✕ Should use generic types (369 ms)
    #allCollections
      ✕ Should return all the collections of a given database (518 ms)
      ✕ Should return a promise (479 ms)
    #renameCollection
      ✕ Should rename properly the collection in the given database (328 ms)
      ✕ Should return a promise of a mongo collection (359 ms)
    #deleteCollection
      ✕ Should delete the collection in the given database (819 ms)
      ✕ Should return a promise (363 ms)
      ✕ Should return true when a collection is deleted (323 ms)
    #insertOneDocument
      ✕ Should insert the document in the given collection (470 ms)
      ✕ Should return a promise of the inserted document (539 ms)
      ✕ Should use generic types (421 ms)
    #insertManyDocuments
      ✕ Should insert the bunch of documents in the given collection (378 ms)
      ✕ Should return a promise of the inserted documents (321 ms)
      ✕ Should use generic types (330 ms)
    #findOneDocument
      ✕ Should retrieve a document in the database (369 ms)
      ✕ Should return a promise (330 ms)
    #findManyDocuments
      ✕ Should retrieve a bunch of documents in the database (329 ms)
      ✕ Should return a promise (331 ms)
    #updateOneDocument
      ✕ Should update the document in the given collection (479 ms)
      ✕ Should return a promise of the updated document (331 ms)
      ✕ Should use generic types (380 ms)
    #updateManyDocuments
      ✕ Should update the bunch of documents in the given collection (347 ms)
      ✕ Should return a promise of an array of the updated documents (391 ms)
      ✕ Should use generic types (361 ms)
    #deleteOneDocument
      ✕ Should delete the document in the given collection (430 ms)
      ✕ Should return true in case of success (249 ms)
      ✕ Should return false if no document has been deleted (411 ms)
      ✕ Should return a promise (368 ms)
      ✕ Should use generic types (261 ms)
    #deleteManyDocuments
      ✕ Should delete the documents in the given collection (469 ms)
      ✕ Should return true in case of success (290 ms)
      ✕ Should return false if no document has been deleted (368 ms)
      ✕ Should return a promise (291 ms)
      ✕ Should use generic types (289 ms) -->

# DB UTILS

## CONTEXT AND OBJECTIVES

In the previous exercises of this course, you have written functions whose purpose was always set in a specific context: create a specific collection with a given name, insert a specific document with given name, properties, etc...

Now it's time to create **utilities functions** which can init and manipulate any database and data using the arguments you pass to them.

The generic operations to perform are:

- init a connection to a database

- CRUD with collections (with validator)

- CRUD with documents

You will probably need the documentation for using [MongoDB API with Node.JS](http://mongodb.github.io/node-mongodb-native/3.5/api/).

⚠️⚠️⚠️ For many parts of this exercise you will need to use [generic types](https://www.typescriptlang.org/docs/handbook/generics.html) to ensure your data integrity. ⚠️⚠️⚠️

> For each function we provide you the arguments types to use.

## SPECS

`initDatabase.ts`:

Write a function `initDatabase` that init and return a MongoDB client. It takes two arguments but **with default values**:

- the URL of the running database **set by default** to `mongodb://mongo-basics-app:password@localhost:27017/mongo-basics`

- an `object` that contains the options required for the connection **set by default** to:

```typescript
  { useNewUrlParser: true, useUnifiedTopology: true }
```

That function must return a `Promise<mongo.MongoClient>`

If an error happens, it should `reject` it, if not, use `resolve` (resolve / reject in _promises_).

`createCollectionWithValidator.ts`:

Write a function `createCollectionWithValidator` that create a **typed** collection with a validator in a given database. It take three arguments:

- a mongo database (`Db`)
- a collection name (`string`)
- a validator (we provide you the type in the file)

It must return a `Promise<mongo.Collection<T>>`.

`allCollections.ts`:

Write a function `listCollections` that lists all the collections of a give database.

It takes a mongo database as only argument (`Db`)

It must return a `Promise<mongo.Collection[]>`.

`renameCollections.ts`:

Write a function `renameCollection` that renames a collection in a given database. It takes three arguments:

- a mongo database (`Db`)
- the name of the collection to change (`string`)
- the new name to give to that collection (`string`)

It must return a `Promise<mongo.Collection>`.

`deleteCollection.ts`:

Write a function `deleteCollection` that drops a collection in a given database. It takes two arguments:

- a mongo database (`Db`)
- the name of the collection to delete (`string`)

It must return a `Promise<boolean>` with the value depending on the deletion's success.

`insertOneDocument.ts`:

Write a function `insertOneDocument` that insert a **typed** document in a given collection. It takes two arguments:

- a mongo collection (`Collection`)
- the `rawData` to insert (generic type `T`)

It must return a `Promise<T>`.

`insertManyDocument.ts`:

Write a function `insertManyDocument` that insert a bunch of **typed** documents in a collection. It takes two arguments:

- an mongo collection (`Collection`)
- the array of `rawData` to insert (generic type `T[]`)

It must return a `Promise<T[]>`.

`findOneDocument.ts`:

Write a function `findOneDocument` that find a document in a collection. It takes two arguments:

- an mongo collection (`Collection`)
- the filter object used to find the document (`FilterQuery<T>`)

It must return a `Promise<T>`.

`findManyDocuments.ts`:

Write a function `findManyDocuments` that find a bunch of documents in a collection. It takes two arguments:

- an mongo collection (`Collection`)
- the filter object used to find the document (`FilterQuery<T>`)

It must return a `Promise<T[]>`.

`updateOneDocument.ts`:

Write a function `updateOneDocument` that find and update a document in a given collection. It takes three arguments:

- a mongo collection (`Collection`)
- the filter object used to find the document (`FilterQuery<T>`)
- the object that contains the update to perform on that document (`UpdateQuery<T>`)

It must return a `Promise<T>`.

`updateManyDocuments.ts`:

Write a function `updateManyDocuments` that find and update a bunch of documents in a given collection. It takes three arguments:

- a mongo collection (type `Collection`)
- the filter object used to find the documents (`FilterQuery<T>`)
- the object that contains the update to perform on that documents (`UpdateQuery<T>`)

It must handle errors and return a `Promise<T[]>`.

`deleteOneDocument.ts`

Write a function `deleteOneDocument` that find and delete a document in a given collection. It takes two arguments:

- a mongo collection (`Collection`)
- the filter object used to find the document to delete (`FilterQuery<T>`)

It must return a `Promise<boolean>`:

- `true` in case of success
- `false` if no document has been deleted

`deleteManyDocuments.ts`

Write a function `deleteManyDocuments` that find and delete documents in a given collection. It takes two arguments:

- a mongo collection (`Collection`)
- the filter object used to find the documents to delete (`FilterQuery<T>`)

It must return a `Promise<boolean>`:

- `true` in case of success
- `false` if no document has been deleted

---

During this exercise, feel free to play with your functions by importing them in the `index.ts` (instead of the `dumbUtilFunction`) and running `yarn start` (don't forget to add your `MONGODB_DATABASE_URL` in `.env_vars` before).

You can also check the results in your mongo database:

```bash
$ mongo mongo-basics -u mongo-basics-app -p password
```

> The database is reset each time you run `yarn start` with a populated `users` collection automatically added to it.
