import * as mongo from "mongodb";

// #createCollectionWithValidator
// ✕ Should create a collection including a validator (329 ms)
// ✕ Should return a promise of a mongo collection (412 ms)
// ✕ Should use generic types (369 ms)

// Write a function `createCollectionWithValidator` that create a **typed**
//collection with a validator in a given database. It take three arguments:

// - a mongo database (`Db`)
// - a collection name (`string`)
// - a validator (we provide you the type in the file)

// It must return a `Promise<mongo.Collection<T>>`.

// expect(code).toMatch(/export function createCollectionWithValidator<T>/);
// expect(code).toMatch(/Promise<mongo.Collection<T>>/);
// expect(code).toMatch(/.createCollection<T>/);

type Validator = {
  [key: string]: unknown;
};

export function createCollectionWithValidator<T>(
  mongoDb: mongo.Db,
  nameOfCollectionToCreate: string,
  validatorToApply: Validator,
): Promise<mongo.Collection<T>> {
  // code
  return mongoDb.createCollection<T>(nameOfCollectionToCreate, validatorToApply);
}
