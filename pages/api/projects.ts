import path from 'path'
import defaultApiHandler, {getBySlug, getAllSortedByDate} from './_base'

export default defaultApiHandler

const dir:string =  path.join(process.cwd(), 'content/projects');
const fields:string[] = [
  'slug',
  'name',
  'date',
  'url',
  'logo',
  'image',
  'description'
]

export function getProjectsBySlug(slug:string): any {
  return getBySlug(slug, fields, dir);
}

export function getAllProjectsSortedByDate(): any {
  return getAllSortedByDate(fields, dir);
}