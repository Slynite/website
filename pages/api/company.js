import path from 'path'
import {getAllByFields, getBySlug} from './_base'

const dir =  path.join(process.cwd(), 'content/company');
const fields = [
  'slug',
  'content',
  'name',
]

export function getFileBySlug(slug) {
  return getBySlug(slug, fields, dir);
}

export function getAllFiles() {
  return getAllByFields(fields, dir)
}