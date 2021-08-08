import { connect } from 'react-redux';

import * as Actions from './ActionsTypes';
import FeedComponent from '../Components/FeedComponents';
import InstaFeedService from '../Services/FeedService';

//Maps Feed Related stated from store to props
const mapStateToProps = (state) => ({
    token: state.authReducer.token,
    feed: state.feedReducer.list,
    fetchNext: state.feedReducer.fetchNext,
    feedDetails: state.feedReducer.postDetails
});

//Maps Feed Related actions  to props
const mapDispatchToProps = (dispatch) => ({
 
    generateFeed: async (token) => {      
         //Generate Feed   
        var instaFeedServ = new InstaFeedService();
        var feed = await instaFeedServ.fetchInitialFeed(token);
        if (feed) { 
             //Sends a notification to update store state
            dispatch({ type: Actions.FETCH_INSTA_FEED, payLoad: { list: feed["data"],fetchNext:feed["paging"]["next"] } }) }
    },
    generateNext: async (url) => {
          //Used In Pagination to fetch next posts
        var instaFeedServ = new InstaFeedService();
        var feed = await instaFeedServ.fetchNextFeed(url)
      
        if (feed) {
             //Sends a notification to update store state
            dispatch({ type: Actions.FETCH_INSTA_FEED_NEXT, payLoad: { list:feed["data"],fetchNext:feed["paging"]["next"]} }) }
    },
    setImageDetails: (data) => {
           //Maps details to store to display in modal
        dispatch({ type: Actions.FETCH_INSTA_POST_DETAILS, payLoad: { details: data, imgList: [data] } })
    },
    fetchImageDetails: async (token, data) => {
         //Fetch image details but of no use as array of all feed conatains all these details
        var instaFeedServ = new InstaFeedService();
        var feed = await instaFeedServ.fetchImageDetails(token, data.id)
        if (feed) { dispatch({ type: Actions.FETCH_INSTA_POST_DETAILS, payLoad: { details: data, imgList: [feed] } }) }
    },
    fetchAlbumDetails: async (token, data) => {
         //Fetch details of all the images in that carousal album
        var instaFeedServ = new InstaFeedService();
        var feed = await instaFeedServ.fetchAlbumDetails(token, data.id)
        if (feed) { dispatch({ type: Actions.FETCH_INSTA_POST_DETAILS, payLoad: { details: data, imgList: feed } }) }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedComponent);