import axios from 'axios';
const qs = require('querystring');
import config from '../Helper/config.json';

//handles all Insta auth realted services
export default class InstAuthService {

    async generateToken(code) {
        var resp = await axios.post("https://api.instagram.com/oauth/access_token", qs.stringify({
            "client_id": config["instaClientId"],
            "client_secret": config["instClientSecret"],
            "code": code,
            "grant_type": "authorization_code",
            "redirect_uri": config["baseUrl"]
        }), {
            headers: {

                "Content-Type": "application/x-www-form-urlencoded",
                'Accept': "*/*"
            }
        })
        if (resp && resp.data && resp.data["access_token"]) {
            return resp.data["access_token"]
        }
        else { return null }
    }

};
