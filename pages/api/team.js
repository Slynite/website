import path from 'path'
import {getBySlug, getAllByFields} from './_base'
import { NEXTCLOUD_BASE_URL } from '../../lib/constrants';
import { data } from '../../lib/models/nextcloud/users';
import { getDataFromUserById } from './nextcloud';

export default function handler(req, res) {
  res.status(501).json({ statuscode: 501, message: "Not Implemented" })
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

export async function getTeamMemberBySlug(slug) {
  try {
    var memberBySlug = getBySlug(slug, fields, dir);
    var dataFromNextcloudInstance = await getDataFromUserById(memberBySlug.slug);
    var memberData = {slug: memberBySlug.slug, name: memberBySlug.name, image: memberBySlug.image, position: memberBySlug.position, socialmedia: setSocialMediaArray(memberBySlug.socialmedia), content: memberBySlug.content};

    if (dataFromNextcloudInstance !== null && dataFromNextcloudInstance.enabled == 1) {
      const nextcloudUserData = new data(dataFromNextcloudInstance).getData();
        try {
          memberData = replaceStaticDataWithNextcloudData(memberBySlug, nextcloudUserData);
        } catch(err) {
          console.log("Something wrent wrong by parsing userdata from Necxtcloud instance.")
        }
    }

    return memberData;
  } catch(err) {
    return '{slug: null}';
  }
}

export async function getAllTeamMembers() {
  const listOfTeamMember = getAllByFields(fields, dir);

  const teamMember = []

  for(const member of listOfTeamMember) {
    var data = await getTeamMemberBySlug(member.slug);
    teamMember.push(data);
  }

  return teamMember;
}

function setSocialMediaArray(socialMediaArray) {
  if(socialMediaArray != undefined) {
    const links = [];
    socialMediaArray.forEach(platform => {
        //Load strings from array
        let platformFromObj = Object.keys(platform);
        let urlFromObj = Object.values(platform);

        const linkObj = {platform: platformFromObj.pop(), link: urlFromObj.pop()}

        links.push(linkObj);
    });
    return links;
  }
}

function replaceStaticDataWithNextcloudData(staticData, nextcloudData) {
  //replace website if granted
  const socialMediaArray = setSocialMediaArray(staticData.socialmedia);
  socialMediaArray.forEach(link => {
    if (nextcloudData.getWebsiteScope() !== "v2-private" && link.platform == "website") {
      link.link = nextcloudData.getWebsite();
    }
  });
  return {slug: staticData.slug, name: nextcloudData.getDisplayName(), image: NEXTCLOUD_BASE_URL + "avatar/" + staticData.slug + "/1080", position: nextcloudData.getRole(), socialmedia: socialMediaArray, content: "## " + nextcloudData.getHeadline() + " \n" + nextcloudData.getBiography()}
}