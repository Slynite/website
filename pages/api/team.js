import path from 'path'
import { NEXTCLOUD_BASE_URL } from '../../lib/constrants';
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
  'content'
]

export function getTeamMemberBySlug(slug) {
  try {
    const member =  getBySlug(slug, fields, dir);
    if (member.image == undefined) {
      member.image = getAvatarUrlFromSlug(slug);
    }
    return member;
  } catch(Error) {
    return '{slug: null}';
  }
}

export function getAllTeamMembers() {
  const teammember = getAllByFields(fields, dir);
  teammember.forEach(member => {
    if (member.image == undefined) {
      member.image = getAvatarUrlFromSlug(member.slug);
    }
  })
  return teammember;
}

function getAvatarUrlFromSlug(slug) {
  return NEXTCLOUD_BASE_URL + "avatar/" + slug + "/1080";
}