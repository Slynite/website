import path from 'path'
import {getBySlug, getAllSortedByDate} from './_base'

export default function handler(req, res) {
  res.status(501).json({ statuscode: 501, message: "Not Implemented" })
}

const dir =  path.join(process.cwd(), 'content/projects');
const fields = [
  'slug',
  'name',
  'date',
  'url',
  'logo',
  'image',
  'description'
]

export function getProjectsBySlug(slug) {
  return getBySlug(slug, fields, dir);
}

export function getAllProjectsSortedByDate() {
  return getAllSortedByDate(fields, dir);
}