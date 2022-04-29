import path from 'path'
import {getBySlug, getAllSortedByDate} from './_base'

const dir =  path.join(process.cwd(), 'content/projects');
const fields = [
  'slug',
  'name',
  'date',
  'url',
  'logo',
  'image',
  'excerpt',
  'content',
]

export function getProjectsBySlug(slug) {
  return getBySlug(slug, fields, dir);
}

export function getAllProjectsSortedByDate() {
  return getAllSortedByDate(fields, dir);
}