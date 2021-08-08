import axios from 'axios';
const qs = require('querystring');
import config from '../Helper/config.json';
//Handles all feed related perations
export default class InstaFeedService {

    async fetchInitialFeed(token) {
        var resp = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,edges&limit=10&access_token=' + token)
        if (resp && resp.data) {

            return resp.data
        }
        else { return null }
    }
    async fetchNextFeed(url) {

        var resp = url ? await axios.get(url) : null
        if (resp && resp.data) {
       
            return resp.data
        }
        else { return null }
    }
    async fetchImageDetails(token, mediaId) {
        var resp = await axios.get("https://graph.instagram.com/" + mediaId + "?fields=id,media_type,media_url,username,timestamp&access_token=" + token)
        if (resp && resp.data) {

            return resp.data["data"]
        }
        else { return null }
    }
    async fetchAlbumDetails(token, mediaId) {
        var resp = await axios.get("https://graph.instagram.com/" + mediaId + "/children?fields=id,media_type,media_url,username,timestamp&access_token=" + token)
        if (resp && resp.data) {

            return resp.data["data"]
        }
        else { return null }
    }

};