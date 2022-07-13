import path from 'path'
import { getTeamMemberBySlug } from './team';
import {getBySlug, getAllSortedByDate} from './_base'

export default function handler(req, res) {
  res.status(501).json({ statuscode: 501, message: "Not Implemented" })
}

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
    'tags',
]

export function getPostBySlug(slug) {
    return getBySlug(slug, fields, dir);
}

export function getAllPostsSortedByDate() {
    return getAllSortedByDate(fields, dir)
}

export function getAllPostsWithAllFields() {
  return getAllPostsSortedByDate(fields);
}

export async function getAuthorFromPost(slug) {
  return await getTeamMemberBySlug(slug);
}