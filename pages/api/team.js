import path from 'path'
import {getBySlug, getAllByFields} from './_base'

export default function handler(req, res) {
  res.status(403).send("This function is currently not for public use.")
}

const dir =  path.join(process.cwd(), 'content/team');
const fields = [
  'slug',
  'name',
  'image',
  'position',
  'socialmedia',
  'isVolunteerMember',
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
  const teammember = getAllByFields(fields, dir);
  return teammember;
}