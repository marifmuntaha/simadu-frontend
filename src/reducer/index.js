import {actionType} from "./actionType";
import {AuthInfo, AuthLogin, getData, storeData, updateData, deleteData} from "./action";

let url = '';

async function Dispatch(method, state, params) {
    switch (method) {
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
            url = '/aspect';
            return await getData(url, state, params).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_STORE :
            url = '/aspect';
            return await storeData(url, state).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_SHOW :
            url = `/aspect/${params.id}`;
            return await getData(url, state, params).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_UPDATE :
            url = `/aspect/${state.formData.id}`;
            return await updateData(url, state).then(resp => {
                return resp;
            });
        case actionType.REGISTRANT_DELETE :
            url = `/aspect/${state.id}`;
            return await deleteData(url, state).then(resp => {
                return resp;
            });
        default:
    }
}

export {Dispatch, actionType}