import React, { useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";
import Sidebar from "./sidebar";
import {UserContext} from "../pages/user/UserContext";
import {actionType, Dispatch} from "../reducer";
import {SettingContext} from "../pages/setting/SettingContext";

const Layout = ({title}) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [setting, setSetting] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        Dispatch(actionType.INSTITUTION_SHOW, {setData: setSetting}, {id: 1}).then();
        Dispatch(actionType.AUTH_INFO, {
            setData: setUser,
            setAuth: setAuth
        }).then(() => setLoading(false));
    }, [])
    return !loading && (
        <SettingContext.Provider value={setting}>
            <Head title={!title && 'Memuat...'}/>
            {auth ? (
                <UserContext.Provider value={user}>
                    <AppRoot>
                        <AppMain>
                            <Sidebar fixed/>
                            <AppWrap>
                                <Header fixed/>
                                <Outlet/>
                                <Footer/>
                            </AppWrap>
                        </AppMain>
                    </AppRoot>
                </UserContext.Provider>
            ) : (
                <Navigate to="/masuk"/>
            )}
        </SettingContext.Provider>
    );
};
export default Layout;
