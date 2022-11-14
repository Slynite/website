import path from 'path'
import { getTeamMemberBySlug } from './team';
import defaultApiHandler, {getBySlug, getAllSortedByDate} from './_base'

export default defaultApiHandler

const dir:string =  path.join(process.cwd(), 'content/posts')
const fields:string[] = [
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

export function getPostBySlug(slug:string): any {
    return getBySlug(slug, fields, dir)
}

export function getAllPostsSortedByDate(): any {
    return getAllSortedByDate(fields, dir)
}

export function getAuthorFromPost(slug: string): any {
  //TODO: Test what happens if the author is not found
  return getTeamMemberBySlug(slug)
}