import * as Actions from '../Actions/ActionsTypes';
//Mainatians State
const initialState = {
    list: [],
    fetchNext: '',
    postDetails: {
        details: {},
        imgList: []
    }
};
const FeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_INSTA_FEED:
            return {
                list: action.payLoad.list, fetchNext: action.payLoad.fetchNext
            };
        case Actions.FETCH_INSTA_FEED_NEXT:
            if (action.payLoad.list) { state.list = state.list.concat(action.payLoad.list) }

            return {
                list: state.list, fetchNext: action.payLoad.fetchNext
            };
        case Actions.FETCH_INSTA_POST_DETAILS:

            return {
                list: state.list,
                postDetails: {
                    details: action.payLoad.details,
                    imgList: action.payLoad.imgList
                }
            };


        default:
            return state;
    }
}
export default FeedReducer;