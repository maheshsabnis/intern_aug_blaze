import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const usePromise=(url)=>{

    const [state, updateState] = useState([]);

    useEffect(()=>{
         axios.get(url).then((resp)=>{
             updateState(resp.data);
         }).catch((error)=>{
             updateState([...state, error.message]);
         });
    },[]);
    return state;
}