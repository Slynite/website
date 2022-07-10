import { encode } from 'js-base64';
import { parseString } from "xml2js"; 
import { NEXTCLOUD_AUTH_USERNAME, NEXTCLOUD_BASE_URL, NEXCLOUD_AUTH_APP_PASSWORD } from '../../lib/constrants';
import { data, meta, users, userData } from '../../lib/models/nextcloud/users';

export default async function handler(req, res) {
  res.status(501).json({ statuscode: 501, message: "Not Implemented" })
}

export async function getAllUser() {
  var reponse = await makeRequest("ocs/v2.php/cloud/users", "GET");
  var userList = new users(new meta(reponse.ocs.meta.status, reponse.ocs.meta.statuscode, reponse.ocs.meta.message), new data(reponse.ocs.data.users.element));

  if (userList.meta.statuscode == 200) {
    return userList.data.data;
  } else {
    return null;
  }
}

export async function getDataFromUserById(userId) {
  try {
    var reponse = await makeRequest("ocs/v2.php/cloud/users/" + userId, "GET")
    var dataFromUser = new users(new meta(reponse.ocs.meta.status, reponse.ocs.meta.statuscode, reponse.ocs.meta.message), new data(new userData(reponse.ocs.data.enabled, reponse.ocs.data.id, reponse.ocs.data.email, reponse.ocs.data.emailScope, reponse.ocs.data.displayname, reponse.ocs.data.website, reponse.ocs.data.websiteScope, reponse.ocs.data.role, reponse.ocs.data.headline, reponse.ocs.data.biography)))
    if (dataFromUser.meta.statuscode == 200) {
      return dataFromUser.data.data;
    } else {
      return null;
    }
  } catch(err) {
    return null;
  }
}

async function makeRequest(apiPath, method) {
  let headers = new Headers();
  headers.append('Authorization', 'Basic ' + encode(NEXTCLOUD_AUTH_USERNAME + ":" + NEXCLOUD_AUTH_APP_PASSWORD));
  headers.append('OCS-APIRequest', true);

  try {
    const response = await fetch(NEXTCLOUD_BASE_URL + apiPath, {method:method,
      headers: headers,
    })
    .then(response => response.text())
    .then((body) => { 
      return body;
    });

    var result;

    parseString(response, {explicitArray: false}, function (err, results) {
      if (err === null) {
        result = JSON.stringify(results);
        result = JSON.parse(result);
      } else {
        new Error(err)
      }
    });

    return result;
  } catch(err) {
    console.log("The Nextcloud API backend has some problems trying to resolve: " + err);
  }
}