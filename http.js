import pkg from 'axios';
const { get, post } = pkg;

get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log("Status Code : ",res.status)
        console.log(res.data)
    })
    .catch(err => console.log(err))

post('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        res.status
        console.log("value added")
    })

