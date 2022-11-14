import path from 'path'
import defaultApiHandler, {getAllByFields, getBySlug} from './_base'

export default defaultApiHandler

const dir:string =  path.join(process.cwd(), 'content/company');
const fields:string[] = [
  'slug',
  'content',
  'name',
]

export function getFileBySlug(slug:string): any {
  return getBySlug(slug, fields, dir)
}

export function getAllFiles(): any {
  return getAllByFields(fields, dir)
}