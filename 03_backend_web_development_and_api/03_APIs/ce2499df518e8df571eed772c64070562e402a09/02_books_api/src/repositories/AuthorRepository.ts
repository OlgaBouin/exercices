import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

// => Author Repository
// ✕ Must have all required functions (1 ms)
// #getAll
//   ✕ Must use 'node-fetch' package with the right url and method
//   ✕ returns an `authors` array (1 ms)
// #getOne
//   ✕ Must use 'node-fetch' package with the right url and method
//   ✕ Returns an `author` object (1 ms)
// #getAuthorBooks
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns a `books` array
// #searchByName
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns an `authors` array


class AuthorRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors`)
    .then((reponse) => reponse.json())
  }

  getOne(id: number): Promise<Author> {
    return fetch(`${this.baseUrl}/authors/${id}`)
    .then((reponse) => reponse.json())
  }

  getAuthorBooks(id: number): Promise<Author> {
    return fetch(`${this.baseUrl}/authors/${id}/books`)
    .then((reponse) => reponse.json())
  }
  searchByName(name: string): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors?q=${name}`)
    .then((reponse) => reponse.json())
  }
}




// Leave the line below for tests to work
export {
  AuthorRepository
}
