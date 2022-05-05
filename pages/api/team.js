import path from 'path'
import { TEAMMEMBER_AVATAR_BASE_URL, TEAMMEMBER_AVATAR_SIZE_IN_PX } from '../../lib/constrants';
import {getBySlug, getAllByFields} from './_base'

export default function handler(req, res) {
  res.status(403).send("This function is currently not for public use.")
}

const dir =  path.join(process.cwd(), 'content/team');
const fields = [
  'slug',
  'name',
  'position',
  'socialmedia',
  'content'
]

export function getTeamMemberBySlug(slug) {
  try {
    const member =  getBySlug(slug, fields, dir);
    member.image = getAvatarUrlFromSlug(slug);
    return member;
  } catch(Error) {
    return '{slug: null}';
  }
}

export function getAllTeamMembers() {
  const teammember = getAllByFields(fields, dir);
  teammember.forEach(member => {
    member.image = getAvatarUrlFromSlug(member.slug);
  })
  return teammember;
}

export function getAvatarUrlFromSlug(slug) {
  return TEAMMEMBER_AVATAR_BASE_URL + slug + "/";
}