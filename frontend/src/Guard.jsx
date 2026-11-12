import React, { useEffect, useState } from 'react'
import Loader from './components/Shared/Loader';
import { Navigate } from 'react-router-dom';
import http from './utils/http';

const Guard = ({endpoint, role, children}) => {

    const [authorised, setAuthorised] = useState(false);
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const verifyToken = async ()=>{
           try{
            const {data} =  await http.get(endpoint);
            sessionStorage.setItem("userInfo", JSON.stringify(data));
            setUser(data?.role);
            setLoader(false);
            setAuthorised(true)
           }catch(err){
            setUser(null);
            setLoader(false);
            setAuthorised(false);
            sessionStorage.removeItem('userInfo');
           }
        }
        verifyToken();
    }, [endpoint]);

    if(loader) return <Loader/>

    if(authorised && role === user) {
        return children;
    }else{
        return <Navigate to="/" />
    }

}

export default Guard;
