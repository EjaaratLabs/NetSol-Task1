import * as Actions from '../Actions/ActionsTypes';
//Mainatians State
const initialState = {
    code: '', token: ''
};
const AuthReducer = (state =initialState, action) => {
    switch (action.type) {
        case Actions.ADD_INSTA_CODE:        
            return {
                code: action.payLoad.code
            };
        case Actions.ADD_INSTA_GRANT_TOKEN:
            return {
                code: action.payLoad.code,
                token: action.payLoad.token
            };
        default:
            return state;
    }
}
export default AuthReducer;