import path from 'path'
import defaultApiHandler, {getBySlug, getAllSortedByDate} from './_base'

export default defaultApiHandler

const dir:string =  path.join(process.cwd(), 'content/knowledge');
const fields:string[] = [
  'slug',
  'title',
  'excerpt',
  'image',
  'date',
  'updated',
  'category',
  'tags',
  'content',
]

export function getKnowledgeBaseEntryBySlug(slug:string): any {
  return getBySlug(slug, fields, dir);
}

export function getAllKnowledgeBaseEntriesSortedByDate(): any {
  return getAllSortedByDate(fields, dir);
}