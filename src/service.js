import axios from 'axios';

  function createHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}


const URL = 'http://localhost:4000';

function postSingUp(body){
    const promise = axios.post(`${URL}/sing-up`, body);
    return promise;
}

function postLogIn(body){
    const promise = axios.post(`${URL}/sing-in`, body);
    return promise;
}

function getLogout(token){
    const config = createHeaders(token);
    const promise = axios.get(`${URL}/logout`, config)
    return promise
}

function getTransactions(token){
    const config = createHeaders(token);
    const promise = axios.get(`${URL}/transactions`, config);
    return promise
}

function postTransaction(token, type, body){
    const config = createHeaders(token);
    const promise = axios.post(`${URL}/transaction/${type}`, body, config)
    return promise
}

export{
    postSingUp,
    postLogIn,
    getLogout,
    getTransactions,
    postTransaction

}
