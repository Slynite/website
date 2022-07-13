import path from 'path'
import {getAllByFields, getBySlug} from './_base'

export default function handler(req, res) {
  res.status(501).json({ statuscode: 501, message: "Not Implemented" })
}

const dir =  path.join(process.cwd(), 'content/legal');
const fields = [
  'slug',
  'content',
  'updated',
  'name',
]

export function getFileBySlug(slug) {
  return getBySlug(slug, fields, dir);
}

export function getAllFiles() {
  return getAllByFields(fields, dir)
}