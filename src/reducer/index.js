import {actionType} from "./actionType";
import {AuthInfo, AuthLogin, getData, storeData, updateData, deleteData} from "./action";

let url = '';

async function Dispatch(method, state, params) {
    switch (method) {
        case actionType.INSTITUTION_SHOW :
            url = `/master/institution/${params.id}`;
            return await getData(url, state, params).then(resp => {
                return resp;
            });
        case actionType.AUTH_REGISTER :
            url = '/auth/register';
            return storeData(url, state).then(resp => {
                return resp;
            });
        case actionType.AUTH_LOGIN :
            url = '/auth/login';
            return AuthLogin(url, state).then(resp => {
                return resp;
            });
        case actionType.AUTH_INFO :
            url = '/auth/info';
            return await AuthInfo(url, state).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_GET :
            url = '/admission/registrant';
            return await getData(url, state, params).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_STORE :
            url = '/admission/registrant';
            return await storeData(url, state).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_SHOW :
            url = `/admission/registrant/${params.id}`;
            return await getData(url, state, params).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_UPDATE :
            url = `/admission/registrant/${state.formData.id}`;
            return await updateData(url, state).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_DELETE :
            url = `/admission/registrant/${state.id}`;
            return await deleteData(url, state).then(resp => {
                return resp;
            });
        default:
    }
}

export {Dispatch, actionType}