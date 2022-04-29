import path from 'path'
import {getBySlug, getAllByFields} from './_base'

const dir =  path.join(process.cwd(), 'content/team');
const fields = [
  'slug',
  'name',
  'position',
  'desciption',
  'image',
  'socialmedia',
  'content'
]

export function getTeamMemberBySlug(slug) {
  try {
    return getBySlug(slug, fields, dir);
  } catch(Error) {
    return '{slug: null}';
  }
}

export function getAllTeamMembers() {
  return getAllByFields(fields, dir)
}