import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

// Github Client
// #getReposUrl
//   ✕ Must use getReposUrlByNickname (5 ms)
//   ✕ Must use the nickname parameter in the url (1 ms)
//   ✕ Must return a promise with the user's repositories url as a string (2 ms)
//   ✕ Must throw an error with a clear message when the user doesn't exist (1 ms)
// #getRepos
//   ✕ Must use fetch (1 ms)
//   ✕ Must use the url parameter to make the fetch call
//   ✕ Must return a promise with the repositories list (1 ms)
// #getProjectInformations
//   ✕ Must use fetch (5 ms)
//   ✕ Must use the url parameter to make the fetch call (2 ms)
//   ✕ Must return a promise with the repository only (1 ms)
// #printRepos
//   ✕ Must take an array repositories as argument
//   ✕ Must return the array (2 ms)
//   ✕ Must use 'console.log' to print the list of repositories in the right format (1 ms)
// #printRepoitory
//   ✕ Must take a repository as an argument (1 ms)
//   ✕ Must use 'console.log' to print the repository informations (1 ms)

export class GithubClient {
  static getReposUrl(nameOfUser: string): Promise<string | void> {
    // You code goes here


    return new Promise((resolve, reject) => {
      getReposUrlByNickname(nameOfUser).then((responseOfFunc) => {
        if (responseOfFunc.message === "Not Found") {
          reject(new Error ("No user found"));
        } else resolve(responseOfFunc.repos_url);
      });
    });
  }

  static getRepos(urlOfRepositories) {
    // You code goes here

  }

  static printRepos() {
    // You code goes here
  }

  static printRepository() {
    // You code goes here
  }

  static getProjectInformations() {
    // You code goes here
  }
}

//console.log(getReposUrlByNickname("fewlinesco").then((repo) => console.log(repo)));
//getReposUrlByNickname("fewlinesco").then((repo) => console.log(repo.repos_url));
//getReposUrlByNickname("fewtttt").then((repo) => console.log(repo));
