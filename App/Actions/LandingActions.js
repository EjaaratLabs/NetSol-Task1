import { connect } from 'react-redux';

import * as Actions from './ActionsTypes';
import LandingComponent from '../Components/LandingComponent';
import InstaAuthService from '../Services/InstaAuthService';

//Maps Auth Related state from store to props
const mapStateToProps = (state) => ({
    code: state.authReducer.code,
    token: state.authReducer.token
});

//Maps Auth Related actions  to props
const mapDispatchToProps = (dispatch) => ({
    generateToken: async (code) =>{
        //Generate a short lived token from code
        var instaAuthServ=new InstaAuthService();
        var token=await instaAuthServ.generateToken(code);
        if(token)
        { //Sends a notification to update store state
            dispatch({ type: Actions.ADD_INSTA_GRANT_TOKEN, payLoad: { code:code,token: token } })}
    },
    //addToken: () => dispatch({ type: Actions.ADD_INSTA_GRANT_TOKEN }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);