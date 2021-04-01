import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

// => Book Repository
// ✕ Must have all required functions (5 ms)
// #getAll
//   ✕ Must use 'node-fetch' package with the right url and method (31 ms)
//   ✕ Returns a `books` array (1 ms)
// #getOne
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns a `book` object (1 ms)
// #getBookComments
//   ✕ Must use 'node-fetch' package with the right url and method
//   ✕ Returns a `comments` array (1 ms)
// #searchByTitle
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns a `books` array

class BookRepository {
  baseUrl = process.env.BASE_URL

  getAll (): Promise<Book[]> {
    return fetch(`${this.baseUrl}/books`, {
           method: 'GET',
           headers: { 'Content-Type': 'application/json' },
       })
       .then(res => res.json())
       .catch((e) => console.error(e))
     }
     getOne (id: number): Promise<Book> {
       return fetch(`${this.baseUrl}/books/${id}`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
          })
          .then(res => res.json())
          .catch((e) => console.error(e))
        }
   
     getBookComments(id:number): Promise<Comment[]>{
       return fetch(`${this.baseUrl}/books/${id}/comments`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
          })
          .then(res => res.json())
          .catch((e) => console.error(e))
     }
     searchByTitle(title: string): Promise<Comment[]>{
      return fetch(`${this.baseUrl}/books?q=${title}`, {
             method: 'GET',
             headers: { 'Content-Type': 'application/json' },
         })
         .then(res => res.json())
         .catch((e) => console.error(e))
    }
}

// Leave the line below for tests to work
export {
  BookRepository
}
