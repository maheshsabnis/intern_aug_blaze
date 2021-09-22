import axios from 'axios';

export class SecureCallService {

    registerUser(user){
        let response =  axios.post('http://localhost:8010/api/app/register', user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    authUser(user){
        let response =  axios.post('http://localhost:8010/api/app/auth', user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    getData(token){
        let response = axios.get('http://localhost:8010/api/app/get',{
            headers:{
                'AUTHORIZATION': `Bearer ${token}`
            }
        });
        return response;
    }
}