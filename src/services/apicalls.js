import axios from 'axios';

export async function Feedback(name, email, message) {
//    create a axios get request
    const config = {
        method: 'get',
        url: `http://127.0.0.1:5000/feedback?name=${name}&email=${email}&feedback=${message}`,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    return axios(config);
}