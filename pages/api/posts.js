import path from 'path'
import { getTeamMemberBySlug } from './team';
import {getBySlug, getAllSortedByDate, replaceWhitespaces} from './_base'

const dir =  path.join(process.cwd(), 'content/posts');
const fields = [
    'slug',
    'title',
    'date',
    'content',
    'author',
    'image',
    'excerpt',
    'category',
]

export function getPostBySlug(slug) {
    return getBySlug(slug, fields, dir);
}

export function getAllPostsSortedByDate() {
    return getAllSortedByDate(fields, dir)
}

export function getAllPostsByCategory(category) {
  var realCategory = replaceWhitespaces(category);
  const allPosts = getAllPostsWithAllFields();

  const listOfspecifiedPosts = [];
  for (var i = 0; i < allPosts.length; i++) {
      var categories = allPosts[i].category
      for (var y = 0; y < categories.length; y++) {
          if (categories[y] === realCategory && listOfspecifiedPosts.indexOf(allPosts[i]) === -1) {
            listOfspecifiedPosts.push(allPosts[i]);
          }
      }
    }
  return listOfSpecifiedPosts;
}

export function getAllPostsWithAllFields() {
  return getAllPostsSortedByDate(fields);
}

export function getAuthorFromPost(slug) {
  return getTeamMemberBySlug(slug);
}