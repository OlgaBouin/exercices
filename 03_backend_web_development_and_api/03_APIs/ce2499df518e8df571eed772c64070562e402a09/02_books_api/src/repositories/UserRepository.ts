import fetch from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

// => User Repository
// ✕ Must have all required functions
// #getAll
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns a `users` array to the callback
// #getOne
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns a `user` object
// #getUserComments
//   ✕ Must use 'node-fetch' package with the right url and method (1 ms)
//   ✕ Returns a `comments` array (1 ms)
// #create
//   ✕ Must use 'node-fetch' package with the right params
//   ✕ Returns the created `user` (1 ms)
// #update
//   ✕ Must use 'node-fetch' package with the right params (1 ms)
//   ✕ Returns the updated `user`
// #delete
//   ✕ Must use 'node-fetch' package with the right params (1 ms)
//   ✕ Returns the deleted `user` (1 ms)




class UserRepository {
  baseUrl = process.env.BASE_URL

  getAll (): Promise<string[]> {
 return fetch(`${this.baseUrl}/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .catch((e) => console.error(e))
  }
  getOne (id: number): Promise<string> {
    return fetch(`${this.baseUrl}/users/${id}`, {
           method: 'GET',
           headers: { 'Content-Type': 'application/json' },
       })
       .then(res => res.json())
       .catch((e) => console.error(e))
     }

  getUserComments(id:number): Promise<string[]>{
    return fetch(`${this.baseUrl}/users/${id}/comments`, {
           method: 'GET',
           headers: { 'Content-Type': 'application/json' },
       })
       .then(res => res.json())
       .catch((e) => console.error(e))
  }

  create (params: {name: string}): Promise<string> {
    return fetch(`${this.baseUrl}/users`, {
           method: 'POST',
           body: JSON.stringify(params),
           headers: { 'Content-Type': 'application/json' },
       })
       .then(res => res.json())
      //  .then(data => {console.log('Success:', data);
      // })
       .catch((e) => console.error(e))
     }

     update (id: number, params: {name: string}): Promise<string> {
      return fetch(`${this.baseUrl}/users/${id}`, {
             method: 'PATCH',
             body: JSON.stringify(params),
             headers: { 'Content-Type': 'application/json' },
         })
         .then(res => res.json())
         .catch((e) => console.error(e))
       }

       delete (id: number): Promise<string> {
        return fetch(`${this.baseUrl}/users/${id}`, {
               method: 'DELETE',
               headers: { 'Content-Type': 'application/json' },
           })
           .then(res => res.json())
           .catch((e) => console.error(e))
         }
  


}


// Leave the line below for tests to work
export {
  UserRepository
}
