import path from 'path'
import defaultApiHandler, {getBySlug, getAllByFields, Items} from './_base'

export default defaultApiHandler

const dir:string =  path.join(process.cwd(), 'content/team')
const fields:string[] = [
  'slug',
  'name',
  'image',
  'position',
  'socialmedia',
  'isVolunteerMember',
  'content'
]

export function getTeamMemberBySlug(slug:string): any {
  try {
    return getBySlug(slug, fields, dir)
  } catch(Error) {
    return null
  }
}

export function getAllTeamMembers(): any {
  return getAllByFields(fields, dir)
}