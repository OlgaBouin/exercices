import slugify from "slugify";
//sconst slugify = require("slugify");


// slugger
// ✕ Should replace special characters with dashes (6 ms)
// sluggerWithUnderscores
// ✕ Should do the same as slugger but with underscores instead of dashes (1 ms)

export function slugger (urlToSlugify: string) : string{
  return slugify(urlToSlugify);
}

export function sluggerWithUnderscores(urlToSlugify: string) : string{
  return slugify(urlToSlugify, '_');
}