import React from 'react';
import { useSelector } from 'react-redux';

import Counter from '../components/Counter/Counter';
import Header from '../components/Auth/Header';
import UserProfile from '../components/Auth/UserProfile';
import Auth from '../components/Auth/Auth';



const AuthReuxPage = () => {
    const isAuth = useSelector(state => state.authSlice.isAuth)
    return (
        <React.Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </React.Fragment>
    );
}

export default AuthReuxPage;
