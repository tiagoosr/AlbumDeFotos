import axios from 'axios';

const getImage = () => {
    return axios.get('https://jsonplaceholder.typicode.com/photos');
}
const logar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
}
export default {
    getImage,
    logar
}
